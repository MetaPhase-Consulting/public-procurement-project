Usage:

import ListingCard from "../components/ListingCard/ListingCard";

const data = {
  "listing_id": "0021805",
  "record_updated": "7/25/2022",
  "title": "IT Consultant Services for PRIMES (Labor Contract)",
  "requirement_type": "recompete",
  "fiscal_year": "22",
  "target_award_quarter": "Q4",
  "length_of_performance": "<12 mo",
  "security_clearance": "MRPT",
  "office_symbol": "PM/GPI/SFCB",
  "past_competition": "Competitive",
  "past_set_aside": "Women-Owned Small Business (WOSB)",
  "contract_vehicle": "GSA Schedule",
  "estimated_value": ">$150K and <$250K",
  "place_of_performance": "Washington DC",
  "naics_code": "423430 - Computer and Computer Peripheral Equipment and Software Merchant Wholesalers",
};

<ListingCard data={data} />