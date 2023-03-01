# Public Procurement Project

This is the public version of the DoS Forecast Procurement tool. Users can access this application to filter and search upcoming procurement opportunities at the Department of State. 

# Table of Contents
1. [Technologies](#technologies)
2. [Local Setup](#local-setup)
3. [Contributing](#contributing)
4. [Codebase Standards](#codebase-standards)
4. [Data Dictionary](#data-dictionary)

# Technologies
- [Next.js](https://nextjs.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)
- [React USWDS by Truss](https://truss.works/blog/uswds-for-engineers)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

# Local Setup 
### Prerequisites
- node v18.12.1
- yarn
- existing mysql db


Ensure `DATABASE_URL` in your .env file corresponds to your mysql db instance

    DATABASE_URL=your_db_url_here

Start development server

    yarn dev

Setup prisma (and restart development server)

    npx prisma db push
    yarn dev

### Database Setup

Once a local db is setup and connected, it is necessary to get the tables schemas created. It is also ideal to seed the database with data from ServiceNow as of 1/25/23 (provided as JSON files).

1. Create Tables
`npx prisma generate` or `npx prisma db push`

2. Seed Database
`npx prisma db seed`

3. View Database
`npx prisma studio`


# Contributing

## Git Branch Naming Conventions

Please follow the git branch standard below:
- prepended with branch type (feature, update, fix)
- lowercase short description in kabob case (`-` separated)

For example:

    feature/feature-branch-name

## Pull Request Naming Conventions

Please follow the PR standard below:
- enclose last 5 scrum task number with `[PPP-#####]`
- include lowercase short description

For example:

    [PPP-11001] example short description

## Changes and Versioning

Whenever preparing to merge into `dev`, which applies to every working branch, or `main`, which applies to every release branch from `dev`, always ensure that changes are descriptively tracked in the repository [CHANGELOG](./CHANGELOG.md) and the version number is updated in the [package manager metadata](./package.json).



## Git Flow 

Refer to Atlassian's guide to [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).



# Codebase Standards

## Structure

```
src
├── components
│   ├── FeatureOne
│   │   ├── ComponentOne.tsx
│   │   └── ComponentTwo.tsx
│   └── FeatureTwo
│       ├── ComponentOne.tsx
│       └── ComponentTwo.tsx
├── env
├── pages
│   ├── feature
│   │   ├── route.tsx
│   │   └── index.tsx
│   ├── route.tsx
│   └── index.tsx
├── server
├── styles
│   ├── example.css
│   └── globals.css
├── tests
│   ├── components
│   │   ├── ComponentOne.test.tsx
│   │   └── ComponentTwo.test.tsx
│   └── pages
│   │   └── index.tst.tsx
└── utils
```

The `src/components` folder stores React components that assist with modular development of the project's Next.js pages. All sub-directories and component files are named with pascal case.

The `src/pages` folder stores the page components that Next.js generates into routed web pages. Files named with `index` take the name of its parent folder as its route (besides the root index file which has a route of `/` by default). Any other page files with other names take the component name as its route. To keep these components reasonably sized for testing and readability, create components in `src/components` and import them into the `src/pages` components. All components in this directory are named with kabob case.

The `src/styles` folder stores global and additional styles to support customizing the UI of the project. Note that `global.css` contains the import for all additional stylesheets and any styling setup necessary for the UI.

The `src/tests` folder stores unit tests for all React components in the src folder. To run these tests, use `yarn test` and view coverage and success of the written tests in this folder. All test files are named with pascal case.

## Styling

## Code

Document complex components with JSDocs and in-line documentation to assist other developers in understanding logic and purpose.

Example:
```tsx
/**
 * This is an example comment block that turns into JSDocs.
 * It is viewable in the code and when the developer hovers
 * over any usage of 'percentify' throughout the code.
 */
const percentify = (decimalVal: int) => {

    // Example of in-line documentation that provides context otherwise unknown by other devs
    let percent = decimalVal * 100;

    return percent;
};
```

# Data Dictionary

The following tables exist in the Public Procurement Forecast Tool's database. This domain design was translated directly from the ServiceNow models. Each attribute corresponds with a field in a SN. For any fields without an SN equivalent, it may either be specific to our system or is not yet exported from the SN backend.

NOTE: For the proof of concept, we are not using any reference tables and we're only using flat strings in each attribute. For the MVP, any filterable attribute on table `Forecast` will have a reference table and `Forecast` will reference the IDs of the object it relates to.

SN = Service Now
? = Optional Attribute

### Announcement

| Name | SN Ref | Type | Constraints | Description |
|---|---|---|---|---|
| id | sys_id | `String` | `PRIMARY_KEY` |  |
| synced |  | `DateTime` | Default = NOW | Timestamp of when object was synced or updated with ServiceNow data. |
| created? | sys_created_on | `DateTime` |  |  |
| created_by? |  | `String` |  |  |
| updated? | sys_updated_on | `DateTime` |  |  |
| updated_by? |  | `String` |  |  |
| active | active | `Boolean` |  |  |
| glyph? | glyph | `String` |  |  |
| public | public | `Boolean` |  |  |
| name | name | `String` |  |  |
| title? | title | `String` |  |  |
| summary? | summary | `MediumText` |  |  |
| from? | from | `DateTime` |  |  |
| to? | to | `DateTime` |  |  |


### Highlight Message

| Name | SN Ref | Type | Constraints | Description |
|---|---|---|---|---|
| id | sys_id | `String` | `PRIMARY_KEY` |  |
| number | number | `String` |  | Unique | Government provided identifier for each listing. |
| synced |  | `DateTime` | Default = NOW | Timestamp of when object was synced or updated with ServiceNow data. |
| created? | sys_created_on | `DateTime` |  |  |
| created_by? |  | `String` |  |  |
| updated? | sys_updated_on | `DateTime` |  |  |
| updated_by? |  | `String` |  |  |
| work_notes? |  | `String` |  |  |
| work_notes_list? |  | `String` |  |  |
| active | active | `Boolean` |  |  |
| state? | state | `Integer` |  |  |
| message | u_highlight_message | `MediumText` |  |  |

### Forecast

| Name | SN Ref | Type | Constraints | Description |
|---|---|---|---|---|
| id | sys_id | `String` | `PRIMARY_KEY` | UUID generated by ServiceNow. |
| number | number | `String` |  | Unique | Government provided identifier for each listing. |
| synced |  | `DateTime` | Default = NOW | Timestamp of when object was synced or updated with ServiceNow data. |
| created? | sys_created_on | `DateTime` |  |  |
| created_by? |  | `String` |  |  |
| modified? | u_modified | `DateTime` |  |  |
| opened? |  | `DateTime` |  |  |
| opened_by? |  | `String` |  |  |
| updated? | sys_updated_on | `DateTime` |  |  |
| updated_by? |  | `String` |  |  |
| work_notes? |  | `String` |  |  |
| work_notes_list? |  | `String` |  |  |
| active | active | `Boolean` |  |  |
| archive | u_archive_opportunity | `Boolean` |  |  |
| featured | u_featured_opportunity | `Boolean` |  |  |
| state? | state | `Integer` |  |  |
| action_type? |  | `String` | `FOREIGN_KEY` |  |
| anticipated_award_date? |  | `DateTime` |  |  |
| anticipated_set_aside? |  | `String` | `FOREIGN_KEY` |  |
| anticipated_solicitation_release_date? |  | `DateTime` |  |  |
| co_contact? |  | `String` |  |  |
| contract_vehicle? |  | `String` | `FOREIGN_KEY` |  |
| dollar_value_with_base_option? |  | `String` |  |  |
| estimated_value? | u_est_value | `String` | `FOREIGN_KEY` |  |
| fiscal_year? | u_fiscal_year | `Integer` | 4 Digit Number |  |
| incumbent_contractor? | u_incumbent_contractor | `VarChar(100)` |  |  |
| length_of_performance? | u_length_of_performance | `String` | `FOREIGN_KEY` |  |
| long_description? |  | `MediumText` |  |  |
| naics_code? | u_naics_codes | `String` | `FOREIGN_KEY` |  |
| new_requirement? | u_new_requirement | `String` | `FOREIGN_KEY` |  |
| office_symbol? | u_office_symbol | `String` | `FOREIGN_KEY` |  |
| past_competition? | u_past_competition | `String` | `FOREIGN_KEY` |  |
| past_set_aside? | u_past_set_aside | `String` | `FOREIGN_KEY` |  |
| place_of_performance? | u_place_of_performance | `String` | `FOREIGN_KEY` |  |
| poc_email? | u_point_of_contact_email_address | `VarChar(100)` |  |  |
| poc_name? | u_point_of_contact_name | `VarChar(100)` |  |  |
| requirement_description? | u_requirement_description | `MediumText` |  |  |
| target_award_quarter? | u_target_award_quarter | `Integer` | [1,2,3,4] |  |


### NaicsCode

| Name | Type | Constraints | Description |
|---|---|---|---|
| id |  | PRIMARY_KEY |  |
| synced |  |  |  |
| code |  |  |  |
| title |  |  |  |