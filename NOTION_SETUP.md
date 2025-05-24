# Notion Database Setup for Blog Posts

## Creating Notion Database

### Step 1: Create New Database
1. Open Notion
2. Create a new page or go to existing page
3. Add a "Database" block - select "Table"
4. Name the Database: "Blog Posts"

### Step 2: Configure Properties

Create the following properties in your Database:

| Property Name | Type | Description | Required |
|---------------|------|-------------|----------|
| **id** | Title | Unique identifier for the blog post | ✅ |
| **slug** | Text | URL-friendly version of the title | ✅ |
| **title_he** | Text | Hebrew title | ✅ |
| **title_en** | Text | English title | ✅ |
| **description_he** | Text | Hebrew description | ❌ |
| **description_en** | Text | English description | ❌ |
| **content_he** | Text | Hebrew content (markdown supported) | ❌ |
| **content_en** | Text | English content (markdown supported) | ❌ |
| **coverImage** | URL | URL to cover image | ❌ |
| **author_name_he** | Text | Hebrew author name | ❌ |
| **author_name_en** | Text | English author name | ❌ |
| **author_image** | URL | URL to author image | ❌ |
| **author_title_he** | Text | Hebrew author title | ❌ |
| **author_title_en** | Text | English author title | ❌ |
| **author_bio_he** | Text | Hebrew author bio | ❌ |
| **author_bio_en** | Text | English author bio | ❌ |
| **publishedAt** | Date | Publication date | ❌ |
| **updatedAt** | Date | Update date | ❌ |
| **tags_he** | Multi-select | Hebrew tags | ❌ |
| **tags_en** | Multi-select | English tags | ❌ |
| **readingTime** | Number | Reading time in minutes | ❌ |

### Step 3: How to Create Properties

#### To create a new Property:
1. Click the "+" on the right side of the table
2. Select the required Property type
3. Name the property exactly as shown in the table above
4. Click "Create"

#### Special Settings:

**Multi-select Properties (tags_he, tags_en):**
- After creating the Property, you can add options
- Add common tags like: "Technology", "Business", "News", etc.

**Date Properties (publishedAt, updatedAt):**
- Choose "Include time" if you want to include time
- Leave default if only date is needed

## Creating Notion Integration

### Step 1: Create Integration
1. Go to [Notion Developers](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Fill in the details:
   - **Name**: "Blog Posts Integration"
   - **Logo**: (optional)
   - **Associated workspace**: Select your workspace
4. Click "Submit"

### Step 2: Get Token
1. After creating the Integration, you'll receive an **Internal Integration Token**
2. Copy the Token (starts with `secret_`)
3. Save it in a secure place

### Step 3: Share Database with Integration
1. Go to the Database you created
2. Click "Share" in the top right corner
3. Click "Invite"
4. Search for the Integration name you created
5. Select it and click "Invite"

## Getting Database ID

### Method 1: From URL
1. Open the Database in Notion
2. Copy the URL
3. The Database ID is the part between the name and `?v=`
4. Example: `https://notion.so/workspace/DatabaseName-**32charID**?v=viewID`

### Method 2: Via Share
1. Click "Share" on the Database
2. Click "Copy link"
3. The ID is found in the copied URL

## Environment Variables Setup

1. Copy `.env.example` to `.env.local`
2. Fill in the values:
   ```
   NOTION_TOKEN=secret_your_integration_token_here
   NOTION_DATABASE_ID=your_32_character_database_id
   ```

## Example Blog Entry

| id | slug | title_he | title_en | publishedAt |
|----|------|----------|----------|-------------|
| blog-1 | my-first-blog | הבלוג הראשון שלי | My First Blog | 2024-01-15 |

## API Usage

### Get all blogs
```
GET /api/blog
```

### Get specific blog
```
GET /api/blog?slug=blog-slug
```

### Refresh cache
```
POST /api/blog/refresh
```

## Important Tips

1. **Property Names**: Must be exactly as shown in the table (case-sensitive)
2. **Slug**: Must be unique for each post
3. **Dates**: Use YYYY-MM-DD format
4. **Tags**: Add tags in Multi-select before using

## Common Issues

### "Unauthorized" Error
- Check that the Integration Token is correct
- Ensure the Database is shared with the Integration

### "Database not found" Error
- Check that the Database ID is correct
- Ensure the Database exists and is accessible

### Posts not appearing
- Ensure all required fields are filled 