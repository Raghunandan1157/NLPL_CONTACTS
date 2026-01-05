# NLPL Employee Directory

A modern, responsive employee directory web application powered by Supabase and hosted on GitHub Pages.

![Employee Directory Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)

## ✨ Features

- 🔍 **Real-time Search** - Instantly search employees by name, ID, role, or location
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Modern Dark Theme** - Beautiful glassmorphism design with smooth animations
- ⚡ **Fast Loading** - Optimized for performance with lazy loading
- 🔒 **Secure Backend** - Powered by Supabase for reliable data management

## 🚀 Live Demo

Visit the live application: [NLPL Employee Directory](https://YOUR_USERNAME.github.io/NLPL_CONTACTS/)

> Replace `YOUR_USERNAME` with your GitHub username after deploying.

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling & Animations |
| JavaScript (ES6+) | Interactivity |
| [Supabase](https://supabase.com) | Backend Database |
| [GitHub Pages](https://pages.github.com) | Hosting |

## 📦 Setup

### Prerequisites

1. A GitHub account
2. A Supabase project with an `employees` table

### Database Schema

Create a table named `employees` in your Supabase project with the following structure:

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    emp_id TEXT,
    name TEXT,
    role TEXT,
    location TEXT,
    mobile TEXT
);
```

### Deployment

1. **Fork or Clone** this repository
2. **Update Supabase Credentials** in `index.html`:
   ```javascript
   const SUPABASE_URL = "your-supabase-url";
   const SUPABASE_KEY = "your-anon-key";
   ```
3. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Under "Source", select `main` branch
   - Click **Save**
4. Your site will be live at `https://YOUR_USERNAME.github.io/NLPL_CONTACTS/`

## 🔧 Configuration

### Environment Variables

The application uses client-side Supabase authentication. Make sure to:

1. Enable Row Level Security (RLS) on your `employees` table
2. Add appropriate policies for anonymous read access:

```sql
-- Allow anonymous read access
CREATE POLICY "Allow anonymous read access" 
ON employees FOR SELECT 
USING (true);
```

## 📁 Project Structure

```
NLPL_CONTACTS/
├── index.html      # Main application (HTML, CSS, JS bundled)
├── README.md       # Project documentation
└── .git/           # Git version control
```

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full |
| Edge | ✅ Full |
| IE 11 | ❌ Not Supported |

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📧 Contact

For questions or support, please open an issue in this repository.

---

<p align="center">Made with ❤️ by NLPL Team</p>
</CodeContent>
<parameter name="EmptyFile">false
