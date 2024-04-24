Project CMS Documentation

This README provides detailed instructions on how to set up and manage the content collections within Strapi for your project. Each section covers the creation of a specific collection type along with its attributes and how they should be configured in the Strapi admin panel.
Contents

    Introduction
    Setting Up Collections
        Portfolio Collection
        Case Studies Collection
        Reviews Collection
    API Key Configuration
    Frontend Integration

Introduction

This document aims to guide you through the configuration of your content management system using Strapi. It includes steps to set up various collections, configure API access, and connect with the frontend application.
Setting Up Collections
Portfolio Collection

Purpose: To showcase various projects or works including videos and images.

Fields:

    Title: Text field for the title of the portfolio item.
    Video: Media field (required) for uploading a video.
    Alt: Text field for alternative text for the video.
    PreloadMedia: Media field (required) for preloading images.

Steps to create:

    Navigate to Content-Types Builder in the Strapi admin panel.
    Click on Create new collection type.
    Enter portfolio as the display name.
    Add the following fields:
        Title: type 'string'.
        Video: type 'media', required, allows types 'images', 'files', 'videos', 'audios'.
        Alt: type 'string'.
        PreloadMedia: type 'media', required, allows type 'images'.
    Enable Draft and Publish.
    Save and restart Strapi to apply changes.

Case Studies Collection

Purpose: To detail specific projects or client stories with comprehensive descriptions and media.

Fields:

    Title: Text field (required).
    Description: Large text area (required).
    Image: Media field (required) for uploading relevant images.
    Alt: Text field (required) for alternative text for the image.
    Paragraphs: Blocks for adding multiple rich text paragraphs.

Steps to create:

    Follow the same initial steps as for the Portfolio collection.
    Use case-studie as the display name.
    Define the attributes as specified above.
    Save and allow Strapi to restart.

Reviews Collection

Purpose: To display reviews or testimonials from clients, including their position and location.

Fields:

    Name: Text field for the reviewer’s name.
    Position: Text field for the reviewer’s job position.
    Review: Text area for the review content.
    Icon: Optional media field for an icon or image.
    Location: Text field for the reviewer's location.
    Alt: Text field for alternative text for the media.

Steps to create:

    Begin with the same steps as the previous collections.
    Use review as the display name.
    Add the fields as outlined.
    Save changes and restart Strapi.

API Key Configuration

    Navigate to Settings > API Tokens in the Strapi dashboard.
    Create a new token with read permissions for the API.
    Copy the API key for use in the frontend.

Frontend Integration

    Add the API key to your frontend application's .env file:

    makefile

    REACT_APP_STRAPI_API_KEY=your_api_key_here

Conclusion

This documentation outlines the necessary steps to set up your content collections in Strapi and integrate them with your frontend application. Ensure that you test all configurations before going live.