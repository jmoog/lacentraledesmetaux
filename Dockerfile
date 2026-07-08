# syntax=docker/dockerfile:1

# ---- Étape 1 : build du site statique Astro ----
FROM node:22-alpine AS build
WORKDIR /app

# Dépendances (cache Docker : ne réinstalle que si package*.json change)
COPY package.json package-lock.json ./
RUN npm ci

# Sources + build
COPY . .
# Aucune variable requise : sans GOOGLE_PLACES_API_KEY, les avis Google
# retombent sur les valeurs statiques du config (cf. src/lib/google-reviews.ts).
RUN npm run build

# ---- Étape 2 : service statique via Nginx ----
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
