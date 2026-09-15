# A Pinch of Memories

> **Because the best recipes are the ones we remember.**

**A Pinch of Memories** is a nostalgic recipe website created to celebrate the connection between food, memories, traditions, and home. The website brings together familiar Indian flavours, comforting desserts, and refreshing beverages in a simple and visually appealing interface.

**Live Website:**
https://deepti-nanda.github.io/APinchOfMemories/

**GitHub Repository:**
https://github.com/Deepti-Nanda/APinchOfMemories

---

## Features

* **Home Page** — Introduction to the website and recipe categories.
* **Indian Flavours** — Traditional and comforting Indian dishes.
* **Desserts** — Sweet recipes for celebrations and special occasions.
* **Beverages** — Refreshing homemade drinks.
* **Detailed Recipe Pages** — Ingredients and step-by-step cooking instructions.
* **Sign Up** — Create an account using the frontend interface.
* **Login** — Authenticate using the credentials saved during signup.
* **Welcome Message** — Displays the logged-in user's name.
* **Logout** — Allows users to end their current login session.
* **Local Storage Authentication** — Stores demo user and login-state information in the browser.
* **Responsive Design** — Designed to work across different screen sizes.
* **Nostalgic Visual Design** — Warm colours, typography, imagery, and layout inspired by the feeling of homemade food and cherished memories.

---

## Recipe Categories

### Indian Flavours

The Indian Flavours section currently includes:

* Aalo Parantha
* Lauki Kofta
* Mango Pickle
* Matar Paneer
* Mushroom Masala
* Bhindi Masala
* Paneer 65

### Desserts

The Desserts section includes:

* Chhena Jalebi
* Gulab Jamun
* Kalakand
* Mishti Doi
* Roshogulla

### Beverages

The Beverages section includes:

* Haldi Dudh
* Lassi
* Lemonade
* Masala Chai

---

## Technologies Used

| Technology           | Purpose                                                       |
| -------------------- | ------------------------------------------------------------- |
| **HTML5**            | Website structure and recipe content                          |
| **CSS3**             | Styling, layout, responsive design, and visual effects        |
| **JavaScript**       | Login, signup, logout, and authentication-state functionality |
| **LocalStorage API** | Browser-based storage for demo authentication                 |
| **Git & GitHub**     | Version control and source-code hosting                       |
| **GitHub Pages**     | Deployment and hosting                                        |

---

## Project Structure

```text
A Pinch of Memories/
│
├── index.html
├── IndianFlavours.html
├── Desserts.html
├── Beverages.html
├── login.html
├── signup.html
├── styles.css
│
├── js/
│   ├── auth.js
│   ├── login.js
│   └── signup.js
│
├── src/
│   ├── logo.png
│   ├── IndianFlavours.png
│   ├── Desserts.png
│   ├── Beverages.png
│   ├── AlooParatha.png
│   ├── LaukiKofta.png
│   ├── MangoPickle.png
│   ├── MatarPaneer.png
│   ├── Mushroom.png
│   ├── Okra.png
│   ├── Paneer65.png
│   ├── ChhenaJalebi.png
│   ├── GulabJamun.png
│   ├── Kalakand.png
│   ├── MistiDoi.png
│   ├── Rosogulla.png
│   ├── HaldiDudh.png
│   ├── Lassi.png
│   ├── Lemonade.png
│   ├── MasalaChai.png
│   └── bg.png
│
├── IndianFlavours/
│   ├── AaloParantha.html
│   ├── LaukiKofta.html
│   ├── MangoPickle.html
│   ├── MatarPaneer.html
│   ├── Mushroom.html
│   ├── Okra.html
│   └── Paneer65.html
│
├── Desserts/
│   ├── ChhenaJalebi.html
│   ├── GulabJamun.html
│   ├── Kalakand.html
│   ├── MistiDoi.html
│   └── Roshogulla.html
│
├── Beverages/
│   ├── HaldiDudh.html
│   ├── Lassi.html
│   ├── Lemonade.html
│   └── MasalaChai.html
│
├── README.md
└── LICENSE
```

---

## Authentication

The current version includes a **frontend-only authentication system** implemented using JavaScript and browser `localStorage`.

### Signup

Users can create an account by providing:

* Full Name
* Email
* Password
* Confirm Password

The account information is stored in the browser.

### Login

During login, the entered credentials are compared with the stored account information.

If the credentials are correct:

```text
Login successful
        ↓
Login state saved
        ↓
Redirect to Home
        ↓
Welcome, [User Name]
```

### Logout

When the user clicks **Logout**, the login state is removed and the website returns to the logged-out state.

### Security Note

This authentication system is intended for **learning and demonstration purposes only**.

Passwords are currently stored in browser `localStorage`, which is **not secure for a production application**.

A future production version should use:

* A backend server
* Secure password hashing
* Database storage
* Authentication tokens or secure sessions
* HTTPS
* Server-side validation
* Secure password-reset functionality

---

## Design Concept

The website follows a warm and nostalgic visual direction inspired by:

* Homemade food
* Family recipes
* Traditional Indian cooking
* Childhood memories
* Celebrations around the dining table
* Recipes passed down through generations

The tagline:

> **Taste. Cook. Remember.**

represents the core idea behind the project — food is not only about taste, but also about the memories associated with it.

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/Deepti-Nanda/APinchOfMemories.git
```

### 2. Open the project

```bash
cd APinchOfMemories
```

### 3. Run the website

Since this is a static website, you can open:

```text
index.html
```

directly in a browser.

For a better development experience, you can also use **VS Code Live Server**.

---

## Deployment

The website is deployed using **GitHub Pages**.

### Deployment branch

```text
main
```

### Deployment directory

```text
/
```

### Live Website

https://deepti-nanda.github.io/APinchOfMemories/

---

## Future Improvements

The project can be expanded with:

* Favorite Recipes
* Recipe Search
* Recipe Filtering
* Recipe Ratings and Reviews
* User Profile
* Add Your Own Recipe
* Improved mobile navigation
* Dark Mode
* Backend database
* Secure authentication
* Password reset
* Cloud-based user accounts
* User recipe images
* Printable recipe cards

---

## Learning Objectives

This project was built to practice and strengthen skills in:

* Semantic HTML
* CSS layouts and responsive design
* JavaScript DOM manipulation
* Form validation
* Browser `localStorage`
* Client-side authentication concepts
* File and folder organization
* Git and GitHub
* GitHub Pages deployment
* Building and deploying a complete static website

---

## Author

**Deepti Nanda**

BCA Undergraduate | Aspiring Full-Stack Developer

GitHub:
https://github.com/Deepti-Nanda/

---

## License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

## A Note Behind the Project

> *Some recipes are more than ingredients and instructions — they're memories passed down through generations, celebrations around the table, and the comforting taste of home.*

**A Pinch of Memories** is a small attempt to preserve those feelings through food, recipes, and technology.

### Taste. Cook. Remember.
