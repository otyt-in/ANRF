# Deployment Notes

## Current Fix

The first Vercel build reached `Collecting page data` and then failed. The likely cause was the unconfigured Sanity Studio route evaluating placeholder Sanity config during prerendering.

This has been patched:

- `lib/sanity.ts` now uses a syntactically valid placeholder project id.
- `/studio` imports Sanity Studio only after `NEXT_PUBLIC_SANITY_PROJECT_ID` is configured.

## Redeploy

Commit and push the latest changes from GitHub Desktop:

```text
Fix initial Vercel deploy
```

Then Vercel should automatically redeploy from `main`.

## Sanity Later

After the public site deploys, create a Sanity project and add:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Then redeploy and visit `/studio`.
