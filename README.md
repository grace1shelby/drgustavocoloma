# Dr. Gustavo Coloma Valverde

Professional neurosurgery website with Spanish/English content, patient guides, medical illustrations, career and research information, and a photo gallery.

## Development

Use Node.js 22 and run:

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run build
```

The project uses Next.js static export. The production build is generated in `out/`.

## Vercel

Import this repository into Vercel and use the Next.js framework preset. The included `vercel.json` configures installation and building. No environment variables or external database are required.

## Appointment requests

The appointment form prepares an email to the practice. It does not store contact or medical details on a server or automatically confirm an appointment. Patients send the email from their mail application; the practice confirms availability.

## Content and images

The source preserves the supplied professional information and photographs. Educational illustrations retain their original credits; simplified diagrams are labelled as educational schematics.
