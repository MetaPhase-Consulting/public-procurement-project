import { PrismaClient } from '@prisma/client';
import forecasts from './json/forecast_230125.json';

const prisma = new PrismaClient()

async function main() {
    // const bob = await prisma.user.upsert({
    //     where: { email: 'bob@prisma.io' },
    //     update: {},
    //     create: {
    //         email: 'bob@prisma.io',
    //         name: 'Bob',
    //         posts: {
    //             create: [
    //                 {
    //                     title: 'Follow Prisma on Twitter',
    //                     content: 'https://twitter.com/prisma',
    //                     published: true,
    //                 }
    //             ],
    //         },
    //     },
    // })
    // console.log({ bob })

    for (let i = 0; i < forecasts.length; i++) {
        const forecast = forecasts[i];
        if (forecast) {
            await prisma.forecast.upsert({
                where: { 
                    id: forecast.sys_id
                },
                update: {},
                create: {
                    id: forecast.sys_id,
                    listing_id: forecast.number ?? '0',
                    synced: new Date(),
                    created: new Date(forecast.sys_created_on),
                    modified: new Date(forecast.u_modified),
                    updated: new Date(forecast.sys_updated_on),
                    active: forecast.active == 'true',
                    featured: forecast.u_featured_opportunity =='true',
                    // state: Number(forecast.state),
                    
                    estimated_value: forecast.u_est_value,
                    // fiscal_year: Number(forecast.u_fiscal_year.slice(-2)),
                    length_of_performance: forecast.u_length_of_performance,
                    incumbent_contractor: forecast.u_incumbent_contractor,
                    naics_code: forecast.u_naics_codes,
                    new_requirement: forecast.u_new_requirement,
                    office_symbol: forecast.u_office_symbol,
                    past_set_aside: forecast.u_past_competition,
                    past_competition: forecast.u_past_set_aside,
                    place_of_performance: forecast.u_place_of_performance,
                    poc_name: forecast.u_point_of_contact_name,
                    poc_email: forecast.u_point_of_contact_email_address,
                    requirement_description: forecast.u_requirement_description,
                    // target_award_quarter: Number(forecast.u_target_award_quarter.charAt(length -1)),

                }
            })
        }
    }
    
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })