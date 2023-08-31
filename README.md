


## BookWise  ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg) ![Build Passing](https://img.shields.io/badge/build-passing-brightgreen.svg)

Book Wise is a platform dedicated to book lovers, where you can access an extensive collection of books from different genres that have been previously cataloged. Additionally, you also have the opportunity to contribute your own reviews after logging into the application using your Google or GitHub accounts.

![Project cover](https://raw.githubusercontent.com/lui7henrique/bookwise/main/Cover.jpg)

## Features
- [x] Social authentication with Google and GitHub
- [x] Listing of books with category filters
- [x] Book reviews and comments
- [x] Search by book names

## Layout
The application's layout is available on Figma:

[Figma Layout](https://www.figma.com/file/VzEy348nnGTa5T0EmYDNZR/BookWise--%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=1%3A17&mode=design&t=AbwxZ45cmC4VrU32-1)

## Running the App

Before you start running the app, make sure you have Docker installed and running on your system. If you don't have Docker installed, you can follow the installation instructions for your operating system on the [Docker website](https://docs.docker.com/get-docker/).

1. Create and start a MySQL Docker container:

   ```shell
   # Create and start a MySQL container
   $ docker run --name my-mysql-container -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:latest
   ```

   This command will create a MySQL container named `my-mysql-container` with the specified root password (`my-secret-pw`). It will expose port `3306` for database connections.

2. Clone the project and install the dependencies:

   ```shell
   # Clone this repository
   $ git clone https://github.com/lui7henrique/bookwise.git

   # Navigate to the project folder via the terminal
   $ cd bookwise

   # Install dependencies
   $ npm install
   ```

3. Create a `.env` file to add environment variables. It should look like this:

   ```shell
   # Local MySQL database URL
   DATABASE_URL='mysql://root:my-secret-pw@localhost:3306/your-database-name'

   # NextAuth configurations and providers

   # Project URL
   NEXTAUTH_URL="http://localhost:3000"
   # Random string
   NEXTAUTH_SECRET="dawodkiwdjufdkjnfueisfhisjfhsieuhyfhyfthfdgr"

   # Follow the steps in the NextAuth documentation to configure the providers.

   # Google Provider
   GOOGLE_CLIENT_ID="................"
   GOOGLE_CLIENT_SECRET=".............."

   # GitHub Provider Configurations
   GITHUB_CLIENT_ID="..................."
   GITHUB_CLIENT_SECRET="................."
   ```

   Make sure to replace `your-database-name` with the name of the database you want to use and configure the other environment variables accordingly.

4. Now, start the application:

   ```shell
   # Start the application in development mode
   $ npm run dev

   # The server will start on port: 3000 - access http://localhost:3000
   ```

Make sure to have Docker running and the MySQL container created before you proceed with starting the application.

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Prisma](https://www.prisma.io/)
- [React Query](https://react-query.tanstack.com/)
- [Axios](https://axios-http.com/)
- [Zod](https://github.com/colinhacks/zod)
- [date-fns](https://date-fns.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Tailwind Variants](https://github.com/benface/tailwindcss-variants)
- [@phosphor-icons/react](https://phosphoricons.com/)

## Author

Luiz Henrique - Software Engineer

[Linkedin](https://www.linkedin.com/in/luiz-henrique7/) | [E-mail](mailto:7henrique18@gmail.com)
