# vlabs Website

This is a landing website for vlabs built using [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Documentation

1. Links for buttons "Let's talk, Ready to chat?, Book a call now" you can add in files `header.tsx`, `home-first-cover.tsx`, `explainer-videos.tsx` and `footer.tsx`
2. Domain name for SEO-optomization and indexation you can change in `public/robots.txt`, `public/sitemap.xml` and `src/app/layout.tsx`

## .env

1. `NEXT_PUBLIC_STRAPI_URL` - you shouldn't change
2. `SENDGRID_API_KEY` - put your own API key for sendgrid
3. `SUBJECT_IN_FORM` - put your own subject you want to see in emails
4. `EMAIL` - insert your email address where you want to receive sandgrid emails.

# Project CMS Documentation

## Table of Contents

- [Introduction](#introduction)
- [Setting Up Collections](#setting-up-collections)
  - [Portfolio Collection](#portfolio-collection)
  - [Case Studies Collection](#case-studies-collection)
  - [Reviews Collection](#reviews-collection)
- [API Key Configuration](#api-key-configuration)
- [Frontend Integration](#frontend-integration)

## Introduction

This document is intended to guide you through setting up and managing the Strapi content collections for your project. It includes instructions for creating collection types, configuring API access, and integrating with the frontend.

## Setting Up Collections

### Portfolio Collection

**Purpose:** To showcase various projects or works including videos and images.

#### Fields:

- **Title:** Text field for the title of the portfolio item.
- **Video:** Media field (required) for uploading a video.
- **Alt:** Text field for alternative text for the video.
- **PreloadMedia:** Media field (required) for preloading images.

#### Steps to Create:

1. Navigate to **Content-Types Builder** in the Strapi admin panel.
2. Click on **Create new collection type**.
3. Enter `portfolio` as the display name.
4. Add the fields:
   - **Title**: type 'string'.
   - **Video**: type 'media', required, allows types 'images', 'files', 'videos', 'audios'.
   - **Alt**: type 'string'.
   - **PreloadMedia**: type 'media', required, allows type 'images'.
5. Enable **Draft and Publish**.
6. Save and restart Strapi to apply changes.

**Here is how the strapi\src\api\portfolio\content-types\portfolio\schema.json
file should look like:**

    {

        "kind":  "collectionType",

        "collectionName":  "portfolios",

    	    "info": {

    		    "singularName":  "portfolio",

    		    "pluralName":  "portfolios",

    		    "displayName":  "portfolio",

    		    "description":  ""

    },

        "options": {

    	    "draftAndPublish":  true

    },

        "pluginOptions": {},

        "attributes": {

    	    "title": {

    			    "type":  "string"

    },

        "video": {

    	    "type":  "media",

    	    "multiple":  false,

    	    "required":  true,

    	    "allowedTypes": [

    		    "images",

    		    "videos",

    ]

    },

        "alt": {

    	    "type":  "string"

    },

        "preloadMedia": {

    	    "allowedTypes": [

    			    "images"

    ],

        "type":  "media",

        "multiple":  false,

        "required":  true

    		   }

    	   }

    }

### Case Studies Collection

**Purpose:** To detail specific projects or client stories with comprehensive descriptions and media.

#### Fields:

- **Title:** Text field (required).
- **Description:** Large text area (required).
- **Image:** Media field (required) for uploading relevant images.
- **Alt:** Text field (required) for alternative text for the image.
- **Paragraphs:** Blocks for adding multiple rich text paragraphs.

#### Steps to Create:

1. Follow the initial steps as for the Portfolio collection.
2. Use `case-studie` as the display name.
3. Define the attributes as specified above.
4. Save and allow Strapi to restart.

**Here is how the strapi\src\api\case-studie\content-types\case-studie\schema.json
file should look like:**

    {

        "kind":  "collectionType",

        "collectionName":  "case_studies",

    	    "info": {

    		    "singularName":  "case-studie",

    		    "pluralName":  "case-studies",

    		    "displayName":  "Case studie",

    		    "description":  ""

        },

        "options": {

    	    "draftAndPublish":  true

        },

        "pluginOptions": {},

        "attributes": {

    	    "title": {

    		    "type":  "string",

    		    "required":  true

        },

    "description": {

        "type":  "text",

        "required":  true

    },

    "image": {

        "type":  "media",

        "multiple":  false,

        "required":  true,

    	    "allowedTypes": [

    		    "images",

    		    "files",

    		    "videos",

    		    "audios"

        ]

        },

        "alt": {

        "type":  "string",

        "required":  true

        },

    "paragraphs": {

    "type":  "blocks",

    "required":  true

    	    }

        }

    }

### Reviews Collection

**Purpose:** To display reviews or testimonials from clients, including their position and location.

#### Fields:

- **Name:** Text field for the reviewer’s name.
- **Position:** Text field for the reviewer’s job position.
- **Review:** Text area for the review content.
- **Icon:** Optional media field for an icon or image.
- **Location:** Text field for the reviewer's location.
- **Alt:** Text field for alternative text for the media.

#### Steps to Create:

1. Begin with the same steps as the previous collections.
2. Use `review` as the display name.
3. Add the fields as outlined.
4. Save changes and restart Strapi.

**Here is how the strapi\src\api\review\content-types\review\schema.json
file should look like**

     {

        "kind":  "collectionType",

        "collectionName":  "reviews",

        "info": {

        "singularName":  "review",

        "pluralName":  "reviews",

        "displayName":  "Review",

        "description":  ""

        },

        "options": {

    	    "draftAndPublish":  true

        },

        "pluginOptions": {},

        "attributes": {

    	    "name": {

    		    "type":  "string"

        },

        "position": {

        "type":  "string"

        },

        "review": {

        "type":  "text"

        },

        "icon": {

        "type":  "media",

        "multiple":  false,

        "required":  true,

        "allowedTypes": [

    	    "images",

    	    ]

        },

        "location": {

    	    "type":  "string"

        },

        "alt": {

        "type":  "string"

    	    }

        }

    }

## API Key Configuration

- Navigate to **Settings** > **API Tokens** in the Strapi dashboard.
- Create a new token with read permissions for the API.
- Copy the API key for use in the frontend.

## Frontend Integration

- Add the API key to your frontend application's `.env` REACT_APP_STRAPI_API_KEY="your_api_key_here"

## Conclusion

This README outlines the necessary steps to set up your content collections in Strapi and integrate them with your frontend application. Make sure to test all configurations before going live.
