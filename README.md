# Jenisys - Agency Website

This is the official website for Jenisys, a technology agency specializing in a wide range of services including web development, AI/ML solutions, cloud solutions, and more. This project is built with Next.js and showcases the company's services, portfolio, and blog.

## Technologies Used

This project is built with a modern tech stack:

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [Styled Components](https://styled-components.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/), [React Icons](https://react-icons.github.io/react-icons/), [Framer Motion](https://www.framer.com/motion/) & [Lottie](https://lottiefiles.com/) for animations.
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) for object data modeling.
- **Email:** [Nodemailer](https://nodemailer.com/) for sending emails from the contact form.
- **Deployment:** Optimized for [Vercel](https://vercel.com/) with [Vercel Analytics](https://vercel.com/analytics) and [Speed Insights](https://vercel.com/speed-insights).

## Features

- **Dynamic Pages:** The website features dynamic pages for various services offered by Jenisys.
- **Blog:** A fully functional blog with individual post pages.
- **Contact Form:** A functional contact form that sends emails via Nodemailer.
- **Newsletter Subscription:** An API endpoint to handle newsletter sign-ups, likely saving emails to a MongoDB database.
- **Responsive Design:** The website is designed to be responsive and work on various devices.
- **Sitemap Generation:** A sitemap is automatically generated for better SEO.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/09TuhinDas/Jenisys.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Set up environment variables. Create a file named `.env.local` in the root of the project and add the necessary environment variables. You can use `.env.example` as a template if it exists.
   ```
   MONGODB_URI=your_mongodb_connection_string
   EMAIL_USER=your_email_address
   EMAIL_PASS=your_email_password
   ```
4. Run the development server
   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows the standard Next.js `app` router structure:

-   `src/app/`: Contains all the pages and routes for the application.
-   `src/components/`: Contains all the reusable React components.
-   `src/lib/`: Contains utility functions and data.
-   `public/`: Contains all the static assets like images and videos.
-   `pages/api/`: Contains the API routes for the contact form and newsletter.

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in the development mode.
-   `npm run build`: Builds the app for production to the `.next` folder.
-   `npm start`: Starts the production server.
-   `npm run lint`: Lints the project files.
