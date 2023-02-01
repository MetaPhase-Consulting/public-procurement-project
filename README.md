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

TODO:
- Table default fields
- Field default constraints
- Enumerations
- Sync logic
- Explain how data is maintained

### Forecast

| Name | Type | Constraints | Description |
|---|---|---|---|
| id |  | PRIMARY_KEY |  |
| synced |  |  |  |
| active |  |  |  |
| featured |  |  |  |
| fiscal_year |  |  |  |
| office_symbol |  |  |  |
| new_requirement |  |  |  |
| incumbent_contractor |  |  |  |
| past_set_aside |  |  |  |
| estimated_value |  |  |  |
| place_of_performance |  |  |  |
| length_of_performance |  |  |  |
| requirement_description |  |  |  |
| poc_email |  |  |  |
| poc_name |  |  |  |
| created |  |  |  |
| created_by |  |  |  |
| opened |  |  |  |
| opened_by |  |  |  |
| modified |  |  |  |
| updated |  |  |  |
| updated_by |  |  |  |
| work_notes |  |  |  |
| work_notes_list |  |  |  |
| target_award_quarter |  |  |  |
| past_competition |  |  |  |
| action_type |  |  |  |
| anticipated_award_date |  |  |  |
| anticipated_set_aside |  |  |  |
| anticipated_solicitation |  |  |  |
| co_contact |  |  |  |
| contract_vehicle |  |  |  |
| dollar_value_with_base_option |  |  |  |

### Announcement

| Name | Type | Constraints | Description |
|---|---|---|---|
| id |  | PRIMARY_KEY |  |
| synced |  |  |  |
| name |  |  |  |
| active|  |  |  |
| title |  |  |  |
| summary |  |  |  |
| from |  |  |  |
| to |  |  |  |
| updated |  |  |  |
| updated_by |  |  |  |
| created |  |  |  |
| created_by |  |  |  |


### Highlight Message

| Name | Type | Constraints | Description |
|---|---|---|---|
| id |  | PRIMARY_KEY |  |
| synced |  |  |  |
| active |  |  |  |
| message |  |  |  |
| updated |  |  |  |
| updated_by |  |  |  |
| created |  |  |  |
| created_by |  |  |  |
| work_notes |  |  |  |
| work_notes_list |  |  |  |

### NaicsCode

| Name | Type | Constraints | Description |
|---|---|---|---|
| id |  | PRIMARY_KEY |  |
| synced |  |  |  |
| code |  |  |  |
| title |  |  |  |