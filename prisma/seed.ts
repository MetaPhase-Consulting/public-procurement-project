import { PrismaClient } from '@prisma/client';
import forecasts from './json/forecast_230125.json';

const prisma = new PrismaClient()

async function main() {
    for (let i = 0; i < forecasts.length; i++) {
        const forecast = forecasts[i];
        if (forecast) {
            // TODO: Check for expected patterns in other relevant fields

            const expectedFY = forecast.u_fiscal_year.match(new RegExp(/.*\d{2,}$/i));
            const expectedTAQ = forecast.u_target_award_quarter.match(new RegExp(/Q[1234]/i));

            const state = Number(forecast.state);
            const fiscalYear = expectedFY ? Number(forecast.u_fiscal_year.slice(-2)) : null;
            const targetAwardQuarter = expectedTAQ ? Number(forecast.u_target_award_quarter.charAt(1)) : null;

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
                    state: state,
                    
                    estimated_value: forecast.u_est_value,
                    fiscal_year: fiscalYear,
                    length_of_performance: forecast.u_length_of_performance,
                    incumbent_contractor: forecast.u_incumbent_contractor,
                    naics_code: forecast.u_naics_codes,
                    new_requirement: forecast.u_new_requirement,
                    office_symbol: forecast.u_office_symbol,
                    past_set_aside: forecast.u_past_set_aside,
                    past_competition: forecast.u_past_competition,
                    place_of_performance: forecast.u_place_of_performance,
                    poc_name: forecast.u_point_of_contact_name,
                    poc_email: forecast.u_point_of_contact_email_address,
                    requirement_description: forecast.u_requirement_description,
                    target_award_quarter: targetAwardQuarter,

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