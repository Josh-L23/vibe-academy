-- Seed data for Vibe Academy
-- Based on sample content from vibe-academy.html

-- 1. Insert Users
INSERT INTO users (id, username, full_name, email, country, role_title, vibe_rank, points) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'chisomo_k', 'Chisomo Kalua', 'chisomo@example.com', 'Malawi', 'Full-stack', 'Elite', 2840),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12', 'adesola_o', 'Adesola Okonkwo', 'adesola@example.com', 'Nigeria', 'AI/ML', 'Innovator', 2210),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 'wanjiru_k', 'Wanjiru Kamau', 'wanjiru@example.com', 'Kenya', 'Design/Product', 'Creator', 1890),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 'tendai_m', 'Tendai Moyo', 'tendai@example.com', 'Zimbabwe', 'Backend/DevOps', 'Builder', 1420);

-- 2. Insert Projects
INSERT INTO projects (id, title, description, category, country, author_id) VALUES
('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380b11', 'Malawi Farmer AI Assistant', 'AI-powered crop disease detection and market price advisory for smallholder farmers using mobile-first design.', 'AgriTech', 'Malawi', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380b12', 'AI Legal Document Summarizer', 'Simplifies legal jargon into plain language for everyday Nigerians — contracts, tenancy agreements, and court documents.', 'LegalTech', 'Nigeria', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12'),
('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380b13', 'Campus Marketplace', 'A peer-to-peer marketplace for university students to buy, sell, and trade items within their campus community.', 'Commerce', 'Kenya', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13');

-- 3. Insert Challenges
INSERT INTO challenges (id, title, description, reward_points) VALUES
('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380c11', 'Improve access to education in rural Africa', 'Build a product, tool, or AI-powered solution that meaningfully improves educational access for students in areas with limited infrastructure.', 500);

-- 4. Insert AI Hub: Prompts
INSERT INTO prompts (title, category, content, author_id) VALUES
('NestJS Backend Generator', 'NestJS', 'Generate a complete NestJS backend architecture with auth, CRUD operations, and PostgreSQL schema for [app type].', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12'),
('Responsive Next.js Landing Page', 'UI', 'Build a responsive Next.js landing page for [product]. Dark theme, glassmorphism cards, Framer Motion animations.', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

-- 5. Insert AI Hub: Tool Reviews
INSERT INTO tool_reviews (tool_name, rating, comment, author_id) VALUES
('Claude', 5, 'Best for complex reasoning and code architecture', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('Cursor', 4, 'Game changer for editing existing codebases', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12'),
('ChatGPT', 4, 'Solid for brainstorming and quick answers', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13');

-- 6. Insert Community Feed
INSERT INTO feed_posts (author_id, content, post_type) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Just shipped v1.0 of the Farmer AI Assistant! 🌾 Used Claude to generate the crop disease detection logic and Cursor for the API.', 'Win'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a14', 'Anyone else struggling with Railway cold starts for NestJS? My API has ~8s startup time which ruins the UX on free tier.', 'Question'),
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13', 'This prompt for generating full Figma-ready component specs using Claude is 🔥 Sharing it to the AI Hub.', 'Resource');
