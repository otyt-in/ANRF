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
