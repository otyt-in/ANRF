# Sanity Setup

Project ID:

```text
jk15q95s
```

Dataset:

```text
production
```

## Vercel Environment Variables

Add these in Vercel Project Settings:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=jk15q95s
NEXT_PUBLIC_SANITY_DATASET=production
```

Apply to Production, Preview and Development, then redeploy.

## First CMS Documents

After `/studio` opens, create:

1. `Site Settings`
2. `Home Page`
3. A few `Story` documents

The website has fallback content, so it still works before these documents exist.

## Editing Homepage Copy

Open `/studio`, edit the `Home Page` document and publish.

Editable fields include:

- Hero eyebrow
- Hero title
- Hero text
- Impact numbers
- Long-view section title/text
- Video section title/text
- Featured video URL

For the featured video, use a YouTube video URL, not the channel URL. Example formats:

```text
https://www.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
```

## Editing Homepage Stories

The homepage shows the first three published `Story` documents. Add or edit `Story` documents in Sanity, then publish.

## Social Links

Add YouTube and Instagram links in `Site Settings` when ready. These will feed the homepage social section.
