# Estate Agent Client-Side Web Application

## Module Information
- **Module Code:** 5COSC026W  
- **Module Title:** Advanced Client-Side Web Development  
- **Institution:** University of Westminster  
- **Coursework Weighting:** 60%  
- **Academic Year:** 2025 / 2026  

## Student Information
- **Student Name:** Theran De alwis
- **Student ID:** 20231728

---

## 📌 Project Overview
This project is a **Single Page Application (SPA)** built using **React.js**, inspired by *Rightmove.co.uk*.  
It allows users to **search, view, and favourite properties** using multiple search criteria, entirely on the **client side**, without any server-side logic.

The application fulfills all **core, technical, and assessment requirements** outlined in the coursework brief and is suitable for demonstration in the mandatory viva.

---

## 🎯 Objectives
- Build a responsive estate agent web application using **React**
- Implement **multi-criteria property searching**
- Display results in a **clean, user-friendly UI**
- Allow users to **favourite properties**
- Demonstrate **client-side security, testing, deployment, and version control**

---

## 🔍 Search Features
Users can search properties using any combination of the following criteria:

- Property type (House / Flat / Any)
- Price range (minimum & maximum)
- Bedrooms (minimum & maximum)
- Date added (after a date or between two dates)
- Postcode area (e.g., BR1, NW1)

✔️ The search works with **1 to all 5 criteria simultaneously**.

---

## 🏠 Property Data
- Properties are stored in a **local JSON file**
- **7 total properties** included (as required)
- Each property includes:
  - Type
  - Price
  - Bedrooms
  - Date added
  - Postcode area
  - Images (6–8 per property)
  - Floor plan
  - Location (Google Maps)

---

## 🖼️ Property Pages
Each property has a dedicated page featuring:
- Large main image with thumbnail gallery
- Image viewer for all property images
- Short summary (type, price, location)
- **React Tabs** displaying:
  - Long description
  - Floor plan
  - Google Map

---

## ⭐ Favourites Functionality
Users can:
- Add properties to favourites by:
  - Drag & drop
  - Clicking a favourite button/icon
- Prevent duplicate favourites
- Remove properties by:
  - Dragging out
  - Clicking a delete button
- Clear the entire favourites list
- View favourites directly on the **search page**

---

## 📱 Responsive Design
- Fully responsive layout using:
  - Hand-written CSS media queries
  - Flexbox and Grid
- Two layouts implemented:
  - Large screens
  - Screens smaller than iPad landscape
- Applies to:
  - Search & results page
  - Property details page

---

## 🎨 UI & Aesthetics
The design follows UI/UX best practices:
- Clear visual hierarchy
- Consistent fonts (max 2 styles)
- Grouped related content
- Balanced spacing and alignment
- Visual cues for important information
- Unified design language across pages

---

## 🔐 Client-Side Security
Security measures implemented include:
- Content Security Policy (CSP)
- JSX / HTML encoding to prevent XSS
- Safe handling of user input

---

## 🧪 Testing
- **JEST** testing framework used
- Minimum **5 meaningful tests**
- Tests cover:
  - Search logic
  - Filtering functionality
  - Favourites behaviour
  - UI rendering logic

---

## 🚀 Deployment
- Deployed as a live application using:
  - **GitHub Pages**
- Live URL provided alongside the repository

---

## 🗂️ Version Control
- Hosted on **GitHub**
- Clear, logical, incremental commits
- Descriptive commit messages
- Professional repository structure

---

## ⚙️ Technologies Used
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- React Widgets
- React Tabs
- Jest
- GitHub Pages

---

## 📦 Installation & Setup
```bash
npm install
npm start
