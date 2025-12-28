# Portfolio Project Blueprint

## 1. Project Overview
**Goal:** Build a modern, responsive, dark-themed personal portfolio website based on the detailed UI/UX specifications outlined in this document.

**Visual Style:**
*   Clean dark blue background (`#0f172a`).
*   Vibrant orange accents for buttons and highlights.
*   Glassmorphism effects on cards (slight transparency).
*   A distinct "Sidebar + Main Content" layout for desktop.

**Target Audience:** Recruiters and clients looking for a Full Stack Software Engineer.

## 2. Tech Stack Requirements
*   **Framework:** Next.js 14+ (App Router).
*   **Language:** Javascript.
*   **Styling:** Tailwind CSS.
*   **Icons:** `react-icons` (use FontAwesome, SimpleIcons, or Lucide).
*   **Animations:** Framer Motion (for page transitions, hover effects, and floating elements).
*   **Fonts:** `Inter` or `Poppins` (Google Fonts).
*   **Form Handling:** React Hook Form (UI implementation).

## 3. Design System & Theme
*   **Theme:** Dark Mode default.
*   **Color Palette:**
    *   `Background`: `#0f172a` (Slate 900) or `#020617`.
    *   `Card Background`: `#1e293b` (Slate 800) with `bg-opacity-50` and backdrop blur.
    *   `Primary Text`: `#f8fafc` (Slate 50).
    *   `Secondary Text`: `#94a3b8` (Slate 400).
    *   `Accent/Button`: Gradient from `#f97316` (Orange 500) to `#ea580c` (Orange 600).
    *   `Borders`: Very subtle slate borders (`border-slate-700`).
*   **Global Layout:**
    *   **Sidebar (Desktop):** A fixed vertical bar on the left containing social icons and a vertical text "FOLLOW ME".
    *   **Navbar:** A floating pill-shaped navigation bar centered at the top.
    *   **Container:** Main content centered with a max-width of `7xl`.

## 4. Data Architecture (Mock Data)
Create a `lib/data.js` file to store all static content.
*   **Profile:** Name ("Gaus Al Munir Tushar"), Role ("Software Engineer"), Bio.
*   **Experience:** Array of objects containing: Company Name, Role, Date Range, Location, Description (bullet points), and Tech Stack tags.
*   **Skills:** Categorized objects: { Web, Programming, Databases, Tools }.
*   **Projects:** Array of objects: Title, Category (Frontend/Backend/FullStack), Image URL (placeholder for now), Description, Tech Tags, Links (Live/GitHub).
*   **Socials:** Array of links (GitHub, LinkedIn, Medium, Twitter).

## 5. Implementation Phases (Step-by-Step Instructions)

### Phase 1: Setup & Layout Shell
1.  Initialize Next.js with Tailwind & TypeScript.
2.  Configure `tailwind.config.js` with the custom colors.
3.  Create `lib/data.js` with dummy data matching the structure above.
4.  **Sidebar Component:** Fixed left sidebar (w-[60px] or similar) with a vertical line, social icons, and text rotated 90 degrees ("FOLLOW ME").
5.  **Navbar Component:** Floating sticky top navbar with a "T" logo on the left and links (Experience, Skill, Portfolio, Contact) on the right.

### Phase 2: Hero Section
**File:** `components/Hero.jsx`
*   **Layout:** Grid with 2 columns (Text Left, Image Right).
*   **Left Column:**
    *   "Hello! I am" (Small text, orange).
    *   "Gaus Al Munir Tushar" (Huge H1 text, white).
    *   "Software Engineer" (H2 text, orange).
    *   Short bio paragraph (gray).
    *   Buttons: "Resume / CV" (Orange Background), "Hire Me" (Transparent with Orange Border).
*   **Right Column:**
    *   A professional image container.
    *   **Animation:** Floating technology icons (React, Node, AWS, TS) orbiting or floating around the main image using Framer Motion.

### Phase 3: Experience Section
**File:** `components/Experience.jsx`
*   **Layout:** Vertical stack of cards.
*   **Card Design:**
    *   Dark slate background (`bg-slate-800`).
    *   Top Row: Company Logo (left), Role & Company Name (middle), Date & Location (right).
    *   Middle: Bullet points of work done.
    *   Bottom: Row of small "pills" showing technologies used (e.g., Node.js, Docker).

### Phase 4: Skills Section
**File:** `components/Skills.jsx`
*   **UI Pattern:** Tabbed Interface.
*   **Tabs:** [Web] [Programming] [Databases] [Tools].
*   **Behavior:** Clicking a tab changes the grid of skills displayed below.
*   **Skill Item:** A simple box or pill containing the Icon and the Skill Name.

### Phase 5: Portfolio Section
**File:** `components/Portfolio.jsx`
*   **UI Pattern:** Filterable Grid.
*   **Filters:** Buttons for [All, Web App, Frontend, Backend].
*   **Grid:** 3 columns.
*   **Project Card:**
    *   Thumbnail image at the top.
    *   Title and short description.
    *   Tech stack tags at the bottom.

### Phase 6: Contact & Footer
**File:** `components/Contact.jsx`
*   **Layout:** Split view (Form Left, Info Right).
*   **Form:** Name, Email, Message inputs with a big "Message Me" button.
*   **Info Side:** Email address, "Book a Meeting" link, and physical address.
*   **Footer:**
    *   A unique feature: A row of buttons saying "Thanks" in different languages (Bengali, English, Hindi, etc.).
    *   Copyright notice.

## 6. Development Rules for AI
*   Use `flex` and `grid` for layouts.
*   Ensure the "Follow Me" sidebar disappears on mobile screens (`hidden md:flex`).
*   Use `lucide-react` or `react-icons` for all icons.
*   Do not look for external images; use colored divs or placeholders (`https://via.placeholder.com/...`) where images are required.


**Navbar Component:**
    *   **Logo:** Create a dedicated `Logo.jsx` component.
        *   **Design:** A filled Hexagon shape (using SVG or CSS clip-path).
        *   **Color:** Use the project's primary Orange gradient (`bg-linear-to-br from-orange-500 to-orange-600`).
        *   **Content:** The letter "S" centered inside the hexagon in White or Dark Slate (whichever has better contrast).
        *   **Size:** Approximately 40x40px.
    *   **Layout:** Floating pill-shaped bar centered at the top.
    *   **Links:** Experience, Skill, Portfolio, Contact.