# Public Procurement Project
This is the public version of the DoS Forecast Procurement tool. Users can access this application to filter and search upcoming procurement opportunities at the Department of State. 


# Technologies
- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

# Local Setup 
### Prerequisites
- node v18.2.1
- yarn
- existing mysql db


Ensure `DATABASE_URL` in your .env file corresponds to your mysql db instance

    DATABASE_URL=your_db_url_here

Start development server

    yarn dev

Setup prisma (and restart development server)

    npx prisma db push
    yarn dev
