# Vibe Academy - Database Schema

This document outlines the PostgreSQL database schema for Vibe Academy, designed for hosting on Neon.

## Overview

The schema is built to support a community-driven platform for African builders, focusing on AI-first development, project showcasing, and collaborative learning.

## ER Diagram (Conceptual)

- **Users** (1) <-> (N) **Projects**
- **Users** (1) <-> (N) **FeedPosts**
- **Users** (1) <-> (N) **Prompts**
- **Users** (1) <-> (N) **Workflows**
- **Users** (1) <-> (N) **ToolReviews**
- **Challenges** (1) <-> (N) **ChallengeSubmissions**
- **Users** (1) <-> (N) **ChallengeSubmissions**
- **Projects** (1) <-> (1) **ChallengeSubmissions** (Optional)
- **Users** (1) <-> (N) **Likes/Comments** (Polymorphic)

## Tables

### 1. Users
Stores builder profiles and community standing.

```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    avatar_url TEXT,
    bio TEXT,
    country TEXT,
    role_title TEXT,
    vibe_rank TEXT DEFAULT 'Builder', -- Elite, Innovator, Creator, Builder
    points INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_country ON users(country);
```

### 2. Projects
Showcase of products built by the community.

```sql
CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    thumbnail_url TEXT,
    category TEXT, -- AgriTech, LegalTech, Commerce, EdTech, etc.
    country TEXT,
    author_id UUID REFERENCES users(id) ON DELETE CASCADE,
    github_url TEXT,
    live_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_projects_author ON projects(author_id);
CREATE INDEX idx_projects_category ON projects(category);
```

### 3. Challenges
Monthly or theme-based community challenges.

```sql
CREATE TABLE challenges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'active', -- active, completed, draft
    start_date TIMESTAMP WITH TIME ZONE,
    end_date TIMESTAMP WITH TIME ZONE,
    reward_points INTEGER DEFAULT 500,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Challenge Submissions
Links users and their projects to specific challenges.

```sql
CREATE TABLE challenge_submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE SET NULL,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(challenge_id, user_id) -- One submission per user per challenge
);
```

### 5. AI Hub: Prompts
Library of community-shared AI prompts.

```sql
CREATE TABLE prompts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT, -- NestJS, UI, Python, etc.
    content TEXT NOT NULL,
    author_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 6. AI Hub: Workflows
Detailed guides and AI-assisted dev workflows.

```sql
CREATE TABLE workflows (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT NOT NULL, -- Markdown or JSON steps
    author_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 7. AI Hub: Tool Reviews
Honest feedback on AI and development tools.

```sql
CREATE TABLE tool_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tool_name TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    author_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 8. Community Feed
Social interactions and updates.

```sql
CREATE TABLE feed_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    post_type TEXT, -- Win, Question, Resource
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 9. Social Interactions (Likes & Comments)
Unified tables for interactions across different entities.

```sql
CREATE TABLE likes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    target_id UUID NOT NULL, 
    target_type TEXT NOT NULL, -- 'project', 'feed_post', 'prompt', 'workflow'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, target_id, target_type)
);

CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    target_id UUID NOT NULL,
    target_type TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_likes_target ON likes(target_id, target_type);
CREATE INDEX idx_comments_target ON comments(target_id, target_type);
```

## Implementation Notes

- **Hosting**: Neon (PostgreSQL).
- **Security**: Row-Level Security (RLS) should be implemented at the application or database layer to protect user data.
- **Extensions**: `pgcrypto` or `uuid-ossp` for UUID generation (Neon handles `gen_random_uuid()` by default).
- **Scaling**: Indices are added to common filter fields (usernames, countries, categories).
