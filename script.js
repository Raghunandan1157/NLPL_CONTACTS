// Supabase Configuration
const SUPABASE_URL = "https://zovnmmdfthpbubrorsgh.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvdm5tbWRmdGhwYnVicm9yc2doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NzE3ODgsImV4cCI6MjA3NzE0Nzc4OH0.92BH2sjUOgkw6iSRj1_4gt0p3eThg3QT4VK-Q4EdmBE";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const searchInput = document.getElementById('searchInput');
const resultsGrid = document.getElementById('resultsGrid');

let debounceTimer;

// Load all initially or wait for search? User said "I can search anything"
// Let's load the first 20 items initially to show it works, then search filters.
fetchEmployees('');

searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const query = e.target.value.trim();
        fetchEmployees(query);
    }, 300);
});

async function fetchEmployees(query) {
    resultsGrid.innerHTML = '<div class="empty-state">Loading...</div>';

    try {
        let dbQuery = supabase.table('employees').select('*');

        if (query) {
            // "Search anything" -> Search across multiple columns
            const searchFilter = `name.ilike.%${query}%,emp_id.ilike.%${query}%,role.ilike.%${query}%,location.ilike.%${query}%`;
            dbQuery = dbQuery.or(searchFilter);
        }

        const { data, error } = await dbQuery.limit(50);

        if (error) throw error;

        renderResults(data);

    } catch (err) {
        console.error('Error fetching data:', err);
        resultsGrid.innerHTML = `<div class="empty-state" style="color:red">Error: ${err.message}</div>`;
    }
}

function renderResults(employees) {
    if (!employees || employees.length === 0) {
        resultsGrid.innerHTML = '<div class="empty-state">No employees found.</div>';
        return;
    }

    resultsGrid.innerHTML = employees.map(emp => `
        <div class="card">
            <span class="role">${escapeHtml(emp.role || 'N/A')}</span>
            <h3>${escapeHtml(emp.name || 'Unknown Name')}</h3>
            <p><strong>ID:</strong> ${escapeHtml(emp.emp_id || '-')}</p>
            <p><strong>📍</strong> ${escapeHtml(emp.location || '-')}</p>
            <p><strong>📞</strong> ${escapeHtml(emp.mobile || '-')}</p>
        </div>
    `).join('');
}

function escapeHtml(text) {
    if (!text) return text;
    return text.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
