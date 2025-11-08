# Masid

**Description:**  
Masid: A Real-Time Earthquake Monitoring and Alert System is a disaster monitoring and alert system designed to provide real-time earthquake updates, safety tips, emergency hotlines, and news to enhance preparedness, awareness, and response. It offers a user-friendly dashboard, offline-ready safety guides, and a complete directory of emergency contacts.  

---

## Tech Stack

- **Frontend:** React.js  
- **Backend:** Node.js / Express  
- **Database:** Supabase + PostgreSQL  
- **API Testing / Documentation:** Postman  

---

## Features

- **Dashboard:**  
  Provides an instant overview of earthquake activity:  
  - Total earthquakes by year  
  - Total earthquakes by month  
  - Most recent events with magnitude, location, and time  
  - Interactive maps for quick visualization  

- **Alerts:**  
  Keeps users informed of earthquake events:  
  - **Recent Alerts:** Latest significant earthquakes with magnitude, location, and timestamp  
  - **Other Alerts:** Lower magnitude or older events for awareness and review  

- **Safety Tips:**  
  Guides users on preparedness and safety:  
  - **Prepare Before:** Step-by-step guidance for disaster readiness  
  - **Stay Safe During:** Safety instructions during earthquakes  
  - **Stay Safe After:** Post-earthquake safety measures  
  - Includes checklists, completion tracking, and simple gamification to encourage engagement  

- **Emergency Hotlines:**  
  Provides a directory of critical contacts:  
  - Nationwide emergency numbers (e.g., 911)  
  - Local PNP, Fire, Medical, and LGU contacts  
  - One-tap copy feature for fast dialing  

- **News:**  
  Keeps users updated with verified information:  
  - Latest earthquake-related news from trusted Philippine sources  
  - Short summaries with “Read More” links  

---

## API Endpoints

### Dashboard
- **GET** `/api/dashboard/:incident_types_id` (`getDashboardData`)  
  Fetch dashboard data from multiple tables (with 2 foreign keys).

### Incidents
- **GET** `/api/incidents/` (`getIncidents`) - Fetch all incidents.  
- **GET** `/api/incidents/:id` (`getIncidentById`) - Fetch an incident by ID.  
- **POST** `/api/incidents/` (`createIncident`) - Create a new incident.  
- **PUT** `/api/incidents/:id` (`updateIncident`) - Update an incident.  
- **DELETE** `/api/incidents/` (`deleteIncident`) - Delete an incident.  

### Location / Shelters
- **GET** `/api/locations/` (`getLocations`) - Fetch all locations.  
- **POST** `/api/locations/` (`createLocation`) - Create a new location or evacuation center.  
- **GET** `/api/locations/:id` (`getLocationById`) - Fetch a location by ID.  
- **PUT** `/api/dashboard/:id` (`updateLocation`) - Update a location.  
- **DELETE** `/api/dashboard/:id` (`deleteLocation`) - Delete a location/shelter.  

### Notifications
- **GET** `/api/notifications/` (`getAllNotifications`) - Fetch all notifications.  
- **GET** `/api/notifications/:id` (`getNotificationById`) - Fetch a notification by ID.  
- **POST** `/api/notifications/` (`createNotification`) - Create a new notification.  
- **PUT** `/api/notifications/:id` (`updateNotification`) - Update a notification.  
- **DELETE** `/api/notifications/:id` (`deleteNotification`) - Delete a notification.  

---

## Setup Guide

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd OpenIT

   npm install
   npm run dev
