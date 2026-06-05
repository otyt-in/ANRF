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
- Hero image
- Impact numbers
- Long-view section title/text
- Long-view image
- Video section title/text
- Featured video URL
- Video poster image
- Work section background image
- Rosewood conservation card image
- Social support card image

For the featured video, use a YouTube video URL, not the channel URL. Example formats:

```text
https://www.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
```

## Editing Homepage Stories

The homepage shows the first three published `Story` documents. Add or edit `Story` documents in Sanity, then publish.

## Recommended Small-Edit Workflow

Use Sanity for small copy/media edits:

1. Open `/studio`.
2. Edit `Home Page`.
3. Change text, images or video URL.
4. Click `Publish`.
5. Refresh the live site after roughly a minute.

Use Codex/code for layout changes:

- Adding/removing sections
- Changing typography globally
- Changing color palette
- Changing spacing/layout
- Adding new CMS fields

## Social Links

Add YouTube and Instagram links in `Site Settings` when ready. These will feed the homepage social section.
