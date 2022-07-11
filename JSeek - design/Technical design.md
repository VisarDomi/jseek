# Stack

ReactJS for the frontend. Do we use Redux? What do we need for the application VS what we need for portfolio item / learning?


## What is needed to actually build this

- CSS layouts or template with responsive layout for mobile viewing (on the go)
- LocalStorage or thin backend layer to DB. 
- React

## What is impressive for portfolio

- Redux
- NodeJS backend with MongoDB
- NextJS for SSR? 
- Caching? Security features? 
- Docker
- AWS (cloudwatch, ecs, ?)


# Data model

Application data model

Company Name : string
Role : string
LeadURL: string 
Tags : Tag[]
NextStep: Step
WorkType: WorkType[]
AppliedOn: DateTime
OtherRequirements: ReqEnum[]

ReqEnum:
['US-only', 'EU-only', 'Legal only']

WorkType Enum:
['Remote', 'On-site', 'Hybrid']


Tag Enum:
['Applied', 'Rejected', 'In progress', 'Assignment needed', 'Offer']

Step data model

Type : StepType
Description : string
Deadline : DateTime (optional)
InterviewDate : DateTime (optional)


StepType Enum:
['Behavioral Interview', 'Assignment', 'Coding Interview']

Cover letter data model

Type: CoverLetterType[]
Text: string

CoverLetterEnum:
['Casual', 'Enthusiatic', 'Professional', 'Well-equipped']

CV data model

Title: string
Cv: File