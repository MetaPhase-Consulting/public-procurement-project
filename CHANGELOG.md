# Changelog

## Instructions

Append a version section to the top of the list.

Follow semantic versioning rules:

X.Y.Z
- X: MAJOR version when you make incompatible API changes 
- Y: MINOR version when you add functionality in a backwards compatible manner 
- Z: PATCH version when you make backwards compatible bug fixes 

Copy and paste the template below for when a new version is ready to merge into `dev` or `main`.

## X.Y.Z (yyyy-MM-dd)

General TLDR description if necessary.

### Features 
- Describe any new features or additions to the code and architecture

### Updates
- Describe any updates to existing features/logic

### Bug Fixes
- Describe any fixes to existing code logic


## 1.0.0 (2023-02-24)

### Features 
- Imported JSON snapshot of ServiceNow data from 1/25/2023
- Created schemas based on relational database design from January 2023
- Created seeding function to parse the JSON of all forecast objects and insert into database
- Created sub-navigation bar underneath state header
- Added homepage with placeholder elements
  - Placeholders for introduction, announcements, and highlight message
  - Feature Opportunities section that queries the database
- Built preview card component
  - Navigates user to details of respective forecast record
- Added forecast browsing page
  - Support pagination
  - Support filtering of new requirement, estimated value, and past set aside
  - Support filtering clearing feature
  - Added filter chips with the ability to delete the filter
  - Query database for forecast objects based on relevant sort, filter, and pagination data
- Added forecast details page
- Added 404 error message component
- Imported government banner, header, and footer
- Setup theming and global styling
- Setup unit testing dependencies and initial unit tests



## 0.1.0 (2022-12-24)

### Features 
- Generated the app using (Create T3 App)(https://create.t3.gg/) with basic techstack