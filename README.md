# resume-api

An API version of my resume. Wanted to get some experience with AWS and deploying applications and I figured we can
start slow with something lightweight.

Possible to dos:

1. List all experiences since this will not need to be limited to a single page like a normal resume.

This uses Node `v18.17.0`.

Response can be seen [here](https://7n3xpxvbdk.us-east-2.awsapprunner.com/resume)

Body:

```
    name: string,
    location: string,
    email: string,
    education: {
        university: string,
        degree: string,
        major: string,
        graduationYear: string
    },
    links: [string],
    skills: {
        languages: [string],
        frameworks: [string],
        otherTools: [string]
    },
    workExperience: [
        {
            name: string,
            title: string,
            responsibilities: string,
            years: string
        }
    ],
    personalProjects: [
        {
            name: string,
            link: string,
            description: string
        }
    ]
```