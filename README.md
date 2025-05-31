# GoMars Application Portal

Welcome to **GoMars** — a multi-step application platform designed to simulate the experience of applying for a mission to Mars.

Built with a **React frontend** and a **Node.js + Express backend**, this app demonstrates modern full-stack development with validation, routing, and MongoDB integration.

---

## Live Demo

- Frontend: https://go-mars-apcp.vercel.app/home
- 
- Backend: https://gomarsbackend.onrender.com

---

## Application Flow

The application guides users through a step-by-step form with real-time validation.

1. **Welcome Page**  
   Introduces the project and invites users to start the application.

2. **Personal Information**  
   Collects first name,last name, date of birth, email address, and phone number.  
   Includes validation for:
   - Name length (minimum 3 characters)
   - Email format
   - 10-digit phone number

3. **Travel Preferences**  
   Lets users select their preferred destination, departure date, Accommodation Preference and Special Requests.

4. **Health & Safety**  
   Collects basic health details and consent for safety protocols.

5. **Thank You Page**  
   Confirms submission and displays a final message.

---

## Features

- Client-side validation with helpful messages for incomplete or incorrect fields
- Multi-step form navigation with state persistence
- React-based frontend UI
- Express API and MongoDB data handling on the backend
- Fully deployed using modern hosting platforms ( Vercel , Render)

---
