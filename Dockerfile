# syntax=docker/dockerfile:1

# ---- Étape 1 : build du site statique Astro ----
FROM node:22-alpine AS build
WORKDIR /app

# Dépendances (cache Docker : ne réinstalle que si package*.json change)
COPY package.json package-lock.json ./
RUN npm ci

# Sources + build
COPY . .
# GOOGLE_PLACES_API_KEY (optionnelle) : transmise au build via un build arg pour
# recuperer la note et les derniers avis Google au moment du build. Absente, les
# avis retombent sur les valeurs statiques du config (cf. src/lib/google-reviews.ts).
ARG GOOGLE_PLACES_API_KEY
ENV GOOGLE_PLACES_API_KEY=$GOOGLE_PLACES_API_KEY
RUN npm run build

# ---- Étape 2 : service statique via Nginx ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
# Port aligne sur la convention Coolify du parc (4321) — cf. nginx.conf.
EXPOSE 4321
CMD ["nginx", "-g", "daemon off;"]
