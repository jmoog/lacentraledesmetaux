# Rapport de nettoyage des photos — Migration WordPress vers Astro
Dossier source analysé : `uploads-la-centrale-des-metaux` (structure WordPress `/uploads/AAAA/MM/`).
**Total fichiers analysés : 297**
**Fichiers conservés : 91**
**Fichiers écartés : 206**

## Répartition des fichiers écartés
| Raison | Nombre |
|---|---|
| Fichiers techniques / cache (captures d'écran de thème, .DS_Store, .vcf, sidecar) | 88 |
| Doublons .webp redondants (Astro régénère lui-même les formats optimisés) | 102 |
| Doublons exacts (contenu binaire identique) | 8 |
| Quasi-doublons visuels (même logo en plusieurs formats/recadrages) | 8 |

## Dossier final livré
`photos-migration-astro/` — prêt à copier dans `src/assets/images/` (ou `public/images/`) du projet Astro.

| Catégorie | Nombre de fichiers |
|---|---|
| photos-site | 64 |
| autres | 5 |
| logos-favicons | 16 |
| icones-tiers | 6 |

Taille totale : ~10 Mo (contre ~40 Mo dans le dossier d'origine).

Les noms de fichiers ont été « slugifiés » (minuscules, sans accents ni espaces) pour éviter tout problème d'URL une fois déployé sur GitHub/Coolify.

## Détail des fichiers écartés

### Fichiers techniques / cache
| Fichier original | Raison |
|---|---|
| `./.DS_Store` | fichier système macOS |
| `./2023/07/vcard-3.vcf` | fichier vCard, non pertinent |
| `./2021/05/component-screenshot-1104-434.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1104-10.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-167.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1107-25.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1104-396.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-10.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-167.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1107-47.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-126.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1104-126.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-107.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1107-47.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-17.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-396.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1104-434.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/page-screenshot-1104.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1107-1.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-396.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-107.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-page-screenshot-1107.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1104-167.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1107-25.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-17.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-434.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-page-screenshot-1104.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1104-10.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1104-17.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1107-47.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1104-107.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1107-25.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-page-screenshot-1107.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-126.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1107-25.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-17.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-page-screenshot-1107.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-396.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/page-screenshot-1107.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-126.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-page-screenshot-1104.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1107-25.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1107-25.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-167.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-434.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-396.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/page-screenshot-1107.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-10.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-page-screenshot-1104.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-126.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/page-screenshot-1104.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-107.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/page-screenshot-1107.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1104-167.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-434.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1107-1.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/page-screenshot-1104.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1104-10.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-17.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1104-10.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1104-107.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/component-screenshot-1107-47.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-17.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/resized-component-screenshot-1104-167.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1107-47.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1104-396.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-107.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1107-47.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2021/05/resized-component-screenshot-1104-434.png.swift-original` | fichier cache/sidecar non-image |
| `./2021/05/component-screenshot-1104-126.png.webp` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/.DS_Store` | fichier système macOS |
| `./2020/11/resized-component-screenshot-331-58.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/component-screenshot-331-18.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/resized-component-screenshot-331-132.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/component-screenshot-331-2.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/component-screenshot-331-112.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/component-screenshot-331-83.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/resized-component-screenshot-331-185.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/resized-component-screenshot-331-18.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/page-screenshot-331.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/component-screenshot-331-185.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/component-screenshot-331-58.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/resized-component-screenshot-331-2.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/resized-page-screenshot-331.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/resized-component-screenshot-331-112.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/resized-component-screenshot-331-83.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/11/component-screenshot-331-132.png` | capture d'écran interne (plugin de thème), pas une photo du site |
| `./2020/03/placeholder.png` | fichier corrompu : c'est en réalité une page HTML enregistrée avec l'extension .png, pas une image |

### Doublons .webp
| Fichier original | Raison |
|---|---|
| `./2022/11/entree-la-centrale-des-metaux-950.jpg.webp` | version .webp redondante de entree-la-centrale-des-metaux-950.jpg (Astro régénère les formats optimisés) |
| `./2022/11/recuperation-du-cuivre-ferrailleur-93-la-centrale-des-metaux.jpg.webp` | version .webp redondante de recuperation-du-cuivre-ferrailleur-93-la-centrale-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2022/11/la-centrale-des-metaux-entree.jpg.webp` | version .webp redondante de la-centrale-des-metaux-entree.jpg (Astro régénère les formats optimisés) |
| `./2022/11/vue-sur-entree-la-centrale-des-metaux.jpg.webp` | version .webp redondante de vue-sur-entree-la-centrale-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2022/11/reciperation-de-batteries-la-centrale-des-metaux.jpg.webp` | version .webp redondante de reciperation-de-batteries-la-centrale-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2022/11/la-centrale-des-metaux-ceryclage-du-metal.jpg.webp` | version .webp redondante de la-centrale-des-metaux-ceryclage-du-metal.jpg (Astro régénère les formats optimisés) |
| `./2022/10/ferrailleur-93-la-centrale-des-métaux-256.png.webp` | version .webp redondante de ferrailleur-93-la-centrale-des-métaux-256.png (Astro régénère les formats optimisés) |
| `./2022/10/waze-logo.png.webp` | version .webp redondante de waze-logo.png (Astro régénère les formats optimisés) |
| `./2022/10/logo-google-maps.png.webp` | version .webp redondante de logo-google-maps.png (Astro régénère les formats optimisés) |
| `./2022/09/cropped-favicon-nouveau-logo-ferrailleur-93-.jpg.webp` | version .webp redondante de cropped-favicon-nouveau-logo-ferrailleur-93-.jpg (Astro régénère les formats optimisés) |
| `./2022/09/favicon-nouveau-logo-ferrailleur-93-.jpg.webp` | version .webp redondante de favicon-nouveau-logo-ferrailleur-93-.jpg (Astro régénère les formats optimisés) |
| `./2022/09/ferrailleur-93-la-centrale-des-métaux-logo-nouvelle-version.png.webp` | version .webp redondante de ferrailleur-93-la-centrale-des-métaux-logo-nouvelle-version.png (Astro régénère les formats optimisés) |
| `./2022/09/ferrailleur-93-la-centrale-des-métaux-logo-nouvelle-version.jpg.webp` | version .webp redondante de ferrailleur-93-la-centrale-des-métaux-logo-nouvelle-version.jpg (Astro régénère les formats optimisés) |
| `./2022/12/noel-la-centrale-des-metaux.jpg.webp` | version .webp redondante de noel-la-centrale-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2022/12/noel-sans-horaires.jpg.webp` | version .webp redondante de noel-sans-horaires.jpg (Astro régénère les formats optimisés) |
| `./2025/07/reglementation-achat-et-vente-de-metaux-icone-la-centrale-des-metaux.png.webp` | version .webp redondante de reglementation-achat-et-vente-de-metaux-icone-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2025/07/Achat-des-metaux-au-meilleur-prix-la-centrale-des-metaux.png.webp` | version .webp redondante de Achat-des-metaux-au-meilleur-prix-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2025/07/entree-la-centrale-des-metaux-a-epinay-sur-seine.jpg.webp` | version .webp redondante de entree-la-centrale-des-metaux-a-epinay-sur-seine.jpg (Astro régénère les formats optimisés) |
| `./2025/07/icone-accueil-la-centrale-des-metaux.png.webp` | version .webp redondante de icone-accueil-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2025/07/metaux-non-ferreux-la-centrale-des-metaux.png.webp` | version .webp redondante de metaux-non-ferreux-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2025/07/Achat-de-metaux-avec-la-centrale-des-metaux.png.webp` | version .webp redondante de Achat-de-metaux-avec-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2025/01/la-centrale-des-metaux-vue-sur-ateleir-de-tri-des-metaux-achetru-de-metaux-en-seine-saint-denis.jpg.webp` | version .webp redondante de la-centrale-des-metaux-vue-sur-ateleir-de-tri-des-metaux-achetru-de-metaux-en-seine-saint-denis.jpg (Astro régénère les formats optimisés) |
| `./2025/12/sapin-noel-dans-la-cour-de-comemrces-a-paris-75-mon-arbre-de-noel.jpg.webp` | version .webp redondante de sapin-noel-dans-la-cour-de-comemrces-a-paris-75-mon-arbre-de-noel.jpg (Astro régénère les formats optimisés) |
| `./2023/03/d3c6eb5a-29f2-4f12-975b-c6ef10686178.jpg.webp` | version .webp redondante de d3c6eb5a-29f2-4f12-975b-c6ef10686178.jpg (Astro régénère les formats optimisés) |
| `./2023/03/4bd6f54f-3b99-4e95-89f8-388e04d3c8d5.jpg.webp` | version .webp redondante de 4bd6f54f-3b99-4e95-89f8-388e04d3c8d5.jpg (Astro régénère les formats optimisés) |
| `./2023/03/48e43a88-b438-4cc7-800e-3cea0c1a076b.jpg.webp` | version .webp redondante de 48e43a88-b438-4cc7-800e-3cea0c1a076b.jpg (Astro régénère les formats optimisés) |
| `./2023/03/a21b8840-92cf-4eb4-926f-ee4c580b3b0b.jpg.webp` | version .webp redondante de a21b8840-92cf-4eb4-926f-ee4c580b3b0b.jpg (Astro régénère les formats optimisés) |
| `./2023/03/0b72eab4-6387-4bbb-a280-8ae3e781e3c9.jpg.webp` | version .webp redondante de 0b72eab4-6387-4bbb-a280-8ae3e781e3c9.jpg (Astro régénère les formats optimisés) |
| `./2023/03/025087d7-6cba-46a0-9640-229803e35a9e.jpg.webp` | version .webp redondante de 025087d7-6cba-46a0-9640-229803e35a9e.jpg (Astro régénère les formats optimisés) |
| `./2023/03/3e9f353e-11af-441f-8b26-07f57c361a13.jpg.webp` | version .webp redondante de 3e9f353e-11af-441f-8b26-07f57c361a13.jpg (Astro régénère les formats optimisés) |
| `./2023/03/7409f938-8c63-4a78-b60e-066bb5282ae9.jpg.webp` | version .webp redondante de 7409f938-8c63-4a78-b60e-066bb5282ae9.jpg (Astro régénère les formats optimisés) |
| `./2023/03/89988a84-9644-4bad-96e3-c468660d7d8f.jpg.webp` | version .webp redondante de 89988a84-9644-4bad-96e3-c468660d7d8f.jpg (Astro régénère les formats optimisés) |
| `./2023/03/4e8d581c-f75b-4e6c-b09a-c16be7d763c2.jpg.webp` | version .webp redondante de 4e8d581c-f75b-4e6c-b09a-c16be7d763c2.jpg (Astro régénère les formats optimisés) |
| `./2023/03/e9233a8a-cf61-4cdd-9031-c4ad7d24e33f.jpg.webp` | version .webp redondante de e9233a8a-cf61-4cdd-9031-c4ad7d24e33f.jpg (Astro régénère les formats optimisés) |
| `./2023/03/caafd23f-96b9-40dc-9828-d4bb5158e7c7.jpg.webp` | version .webp redondante de caafd23f-96b9-40dc-9828-d4bb5158e7c7.jpg (Astro régénère les formats optimisés) |
| `./2023/03/e1180115-9634-4ff5-8b1b-43cdf41aef5e.jpg.webp` | version .webp redondante de e1180115-9634-4ff5-8b1b-43cdf41aef5e.jpg (Astro régénère les formats optimisés) |
| `./2023/03/e94cf44a-9e1c-4d58-a2b9-e07e69893b8c.jpg.webp` | version .webp redondante de e94cf44a-9e1c-4d58-a2b9-e07e69893b8c.jpg (Astro régénère les formats optimisés) |
| `./2023/03/76c15d03-f455-4aac-9546-5c0987a87f71.jpg.webp` | version .webp redondante de 76c15d03-f455-4aac-9546-5c0987a87f71.jpg (Astro régénère les formats optimisés) |
| `./2023/03/1787cab6-945b-46ed-bb67-0d413f878067.jpg.webp` | version .webp redondante de 1787cab6-945b-46ed-bb67-0d413f878067.jpg (Astro régénère les formats optimisés) |
| `./2023/07/google-my-business-logo.jpg.webp` | version .webp redondante de google-my-business-logo.jpg (Astro régénère les formats optimisés) |
| `./2023/07/14-Juillet-2023-Lacentrale-des-metaux.jpg.webp` | version .webp redondante de 14-Juillet-2023-Lacentrale-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2026/01/bonne-annee-2026-la-centrale-des-metaux.jpg.webp` | version .webp redondante de bonne-annee-2026-la-centrale-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2020/03/logo-la-centrale-des-metaux.png.webp` | version .webp redondante de logo-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2020/03/mc-metal-achat-de-métaux-ferrailleur-95-.jpg.webp` | version .webp redondante de mc-metal-achat-de-métaux-ferrailleur-95-.jpg (Astro régénère les formats optimisés) |
| `./2020/03/521d211066296aef49b1ff43b84a40e2.jpg.webp` | version .webp redondante de 521d211066296aef49b1ff43b84a40e2.jpg (Astro régénère les formats optimisés) |
| `./2020/03/logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png.webp` | version .webp redondante de logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png (Astro régénère les formats optimisés) |
| `./2020/03/logo-la-centrale-des-metaux.jpg.webp` | version .webp redondante de logo-la-centrale-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2020/03/recycling-304974_960_720.png.webp` | version .webp redondante de recycling-304974_960_720.png (Astro régénère les formats optimisés) |
| `./2020/03/cropped-logo-la-centrale-des-metaux.png.webp` | version .webp redondante de cropped-logo-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2020/03/cropped-favicon.png.webp` | version .webp redondante de cropped-favicon.png (Astro régénère les formats optimisés) |
| `./2020/03/recycl_f_m_c_01436600_113958882.jpg.webp` | version .webp redondante de recycl_f_m_c_01436600_113958882.jpg (Astro régénère les formats optimisés) |
| `./2020/03/18bb20e3b95c.jpg.webp` | version .webp redondante de 18bb20e3b95c.jpg (Astro régénère les formats optimisés) |
| `./2020/03/waze.jpeg.webp` | version .webp redondante de waze.jpeg (Astro régénère les formats optimisés) |
| `./2020/03/LOGO-GOOGLE-SERP.jpg.webp` | version .webp redondante de LOGO-GOOGLE-SERP.jpg (Astro régénère les formats optimisés) |
| `./2020/03/recyclage-fer-et-metaux-praxy-e1507210441846.jpg.webp` | version .webp redondante de recyclage-fer-et-metaux-praxy-e1507210441846.jpg (Astro régénère les formats optimisés) |
| `./2020/03/favicon.png.webp` | version .webp redondante de favicon.png (Astro régénère les formats optimisés) |
| `./2020/03/cropped-logo-la-centrale-des-metaux-1.png.webp` | version .webp redondante de cropped-logo-la-centrale-des-metaux-1.png (Astro régénère les formats optimisés) |
| `./2020/04/logo-la-centrale-des-metaux.png.webp` | version .webp redondante de logo-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2020/04/logo-la-centrale-des-metaux.jpg.webp` | version .webp redondante de logo-la-centrale-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2020/04/cropped-logo-la-centrale-des-metaux.png.webp` | version .webp redondante de cropped-logo-la-centrale-des-metaux.png (Astro régénère les formats optimisés) |
| `./2020/04/cropped-favicon.png.webp` | version .webp redondante de cropped-favicon.png (Astro régénère les formats optimisés) |
| `./2020/04/favicon.png.webp` | version .webp redondante de favicon.png (Astro régénère les formats optimisés) |
| `./2020/02/aluminium-mc-metal-recyclage-achat-daluminium.jpg.webp` | version .webp redondante de aluminium-mc-metal-recyclage-achat-daluminium.jpg (Astro régénère les formats optimisés) |
| `./2020/02/mc-metal-achat-de-métaux-ferrailleur-95-.jpg.webp` | version .webp redondante de mc-metal-achat-de-métaux-ferrailleur-95-.jpg (Astro régénère les formats optimisés) |
| `./2020/02/recyclage-de-moteurs-électriques-mc-metal-.jpg.webp` | version .webp redondante de recyclage-de-moteurs-électriques-mc-metal-.jpg (Astro régénère les formats optimisés) |
| `./2020/02/cuivre-vieux-métaux-achat-de-cuivre-mc-recyclage.jpg.webp` | version .webp redondante de cuivre-vieux-métaux-achat-de-cuivre-mc-recyclage.jpg (Astro régénère les formats optimisés) |
| `./2020/02/cuivre-recyclage-de-cuivre-mc-metal-recyclage.jpg.webp` | version .webp redondante de cuivre-recyclage-de-cuivre-mc-metal-recyclage.jpg (Astro régénère les formats optimisés) |
| `./2020/02/logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png.webp` | version .webp redondante de logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png (Astro régénère les formats optimisés) |
| `./2020/02/recycling-304974_960_720.png.webp` | version .webp redondante de recycling-304974_960_720.png (Astro régénère les formats optimisés) |
| `./2020/02/cropped-logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png.webp` | version .webp redondante de cropped-logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png (Astro régénère les formats optimisés) |
| `./2020/02/laiton.jpg.webp` | version .webp redondante de laiton.jpg (Astro régénère les formats optimisés) |
| `./2020/02/logo-mc-metal-ferrailleur-95-rachat-de-ferrail-95-achat-de-métaux.jpg.webp` | version .webp redondante de logo-mc-metal-ferrailleur-95-rachat-de-ferrail-95-achat-de-métaux.jpg (Astro régénère les formats optimisés) |
| `./2020/02/mc-metal-recyclacge-pose-de-bennes-qur-chantier.jpg.webp` | version .webp redondante de mc-metal-recyclacge-pose-de-bennes-qur-chantier.jpg (Astro régénère les formats optimisés) |
| `./2020/02/achat-de-zinc-mc-recyclage.jpg.webp` | version .webp redondante de achat-de-zinc-mc-recyclage.jpg (Astro régénère les formats optimisés) |
| `./2020/02/achat-de-batteries-usagées-mc-metal-recyclage.jpg.webp` | version .webp redondante de achat-de-batteries-usagées-mc-metal-recyclage.jpg (Astro régénère les formats optimisés) |
| `./2020/02/recyclage-des-déchets-du-batiment-pose-de-bennes-de-récupération-mc-metal.jpg.webp` | version .webp redondante de recyclage-des-déchets-du-batiment-pose-de-bennes-de-récupération-mc-metal.jpg (Astro régénère les formats optimisés) |
| `./2020/02/moteurs-électriques-recyclage.jpg.webp` | version .webp redondante de moteurs-électriques-recyclage.jpg (Astro régénère les formats optimisés) |
| `./2020/02/achat-de-plomb-mc-metal-recyclage-achète-le-plomb.jpg.webp` | version .webp redondante de achat-de-plomb-mc-metal-recyclage-achète-le-plomb.jpg (Astro régénère les formats optimisés) |
| `./2020/02/achat-de-zinc-rachat-de-zinc-valorisation-dechats-de-toiture-mc-metal-recyclage.jpg.webp` | version .webp redondante de achat-de-zinc-rachat-de-zinc-valorisation-dechats-de-toiture-mc-metal-recyclage.jpg (Astro régénère les formats optimisés) |
| `./2020/02/batteries-usagées-mc-metal-rachète-les-batteries-usagées.jpg.webp` | version .webp redondante de batteries-usagées-mc-metal-rachète-les-batteries-usagées.jpg (Astro régénère les formats optimisés) |
| `./2020/02/zinc-achat-de-zinc-recyclage-de-zinc-mc-metal-recyclage.jpg.webp` | version .webp redondante de zinc-achat-de-zinc-recyclage-de-zinc-mc-metal-recyclage.jpg (Astro régénère les formats optimisés) |
| `./2020/02/rachat-de-zinc-mc-metal-recyclage.jpg.webp` | version .webp redondante de rachat-de-zinc-mc-metal-recyclage.jpg (Astro régénère les formats optimisés) |
| `./2020/02/waze.jpeg.webp` | version .webp redondante de waze.jpeg (Astro régénère les formats optimisés) |
| `./2020/02/unnamed.jpg.webp` | version .webp redondante de unnamed.jpg (Astro régénère les formats optimisés) |
| `./2020/11/G-MAGPIE.png.webp` | version .webp redondante de G-MAGPIE.png (Astro régénère les formats optimisés) |
| `./2020/11/la-centrale-des-métaux-info-covid.jpg.webp` | version .webp redondante de la-centrale-des-métaux-info-covid.jpg (Astro régénère les formats optimisés) |
| `./2020/01/cropped-logo-1.jpg.webp` | version .webp redondante de cropped-logo-1.jpg (Astro régénère les formats optimisés) |
| `./2020/01/IMG1507JPG_5976144ba7110.jpg.webp` | version .webp redondante de IMG1507JPG_5976144ba7110.jpg (Astro régénère les formats optimisés) |
| `./2020/01/521d211066296aef49b1ff43b84a40e2.jpg.webp` | version .webp redondante de 521d211066296aef49b1ff43b84a40e2.jpg (Astro régénère les formats optimisés) |
| `./2020/01/cropped-logo.jpg.webp` | version .webp redondante de cropped-logo.jpg (Astro régénère les formats optimisés) |
| `./2020/01/carte-villes-ile-de-france.jpg.webp` | version .webp redondante de carte-villes-ile-de-france.jpg (Astro régénère les formats optimisés) |
| `./2020/01/Recyclage-et-tri-des-metaux.jpg.webp` | version .webp redondante de Recyclage-et-tri-des-metaux.jpg (Astro régénère les formats optimisés) |
| `./2020/01/cropped-logo-2.jpg.webp` | version .webp redondante de cropped-logo-2.jpg (Astro régénère les formats optimisés) |
| `./2020/01/Recyclage-et-tri-des-metaux-1.jpg.webp` | version .webp redondante de Recyclage-et-tri-des-metaux-1.jpg (Astro régénère les formats optimisés) |
| `./2020/01/logo.jpg.webp` | version .webp redondante de logo.jpg (Astro régénère les formats optimisés) |
| `./2020/01/metal.jpg.webp` | version .webp redondante de metal.jpg (Astro régénère les formats optimisés) |
| `./2020/01/recycl_f_m_c_01436600_113958882.jpg.webp` | version .webp redondante de recycl_f_m_c_01436600_113958882.jpg (Astro régénère les formats optimisés) |
| `./2020/01/18bb20e3b95c.jpg.webp` | version .webp redondante de 18bb20e3b95c.jpg (Astro régénère les formats optimisés) |
| `./2020/01/metal2.jpg.webp` | version .webp redondante de metal2.jpg (Astro régénère les formats optimisés) |
| `./2020/01/recyclage-fer-et-metaux-praxy-e1507210441846.jpg.webp` | version .webp redondante de recyclage-fer-et-metaux-praxy-e1507210441846.jpg (Astro régénère les formats optimisés) |
| `./2020/01/ruin_crash_broken_destroyed_building_demolition_debris_building_rubble-776190.jpg.webp` | version .webp redondante de ruin_crash_broken_destroyed_building_demolition_debris_building_rubble-776190.jpg (Astro régénère les formats optimisés) |
| `./2020/01/plomb.jpg.webp` | version .webp redondante de plomb.jpg (Astro régénère les formats optimisés) |

### Doublons exacts
| Fichier original | Raison |
|---|---|
| `./2025/01/la-centrale-des-metaux-vue-sur-ateleir-de-tri-des-metaux-achetru-de-metaux-en-seine-saint-denis.jpg` | doublon exact (contenu identique) de e94cf44a-9e1c-4d58-a2b9-e07e69893b8c.jpg (./2023/03) |
| `./2020/03/waze.jpeg` | doublon exact (contenu identique) de waze.jpeg (./2020/02) |
| `./2020/03/recyclage-fer-et-metaux-praxy-e1507210441846.jpg` | doublon exact (contenu identique) de recyclage-fer-et-metaux-praxy-e1507210441846.jpg (./2020/01) |
| `./2020/03/521d211066296aef49b1ff43b84a40e2.jpg` | doublon exact (contenu identique) de 521d211066296aef49b1ff43b84a40e2.jpg (./2020/01) |
| `./2020/03/mc-metal-achat-de-métaux-ferrailleur-95-.jpg` | doublon exact (contenu identique) de mc-metal-achat-de-métaux-ferrailleur-95-.jpg (./2020/02) |
| `./2020/03/18bb20e3b95c.jpg` | doublon exact (contenu identique) de 18bb20e3b95c.jpg (./2020/01) |
| `./2020/03/recycl_f_m_c_01436600_113958882.jpg` | doublon exact (contenu identique) de recycl_f_m_c_01436600_113958882.jpg (./2020/01) |
| `./2020/01/Recyclage-et-tri-des-metaux-1.jpg` | doublon exact (contenu identique) de Recyclage-et-tri-des-metaux.jpg (./2020/01) |

### Quasi-doublons visuels
| Fichier original | Raison |
|---|---|
| `./2020/01/cropped-logo-1.jpg` | quasi-doublon visuel de logo.jpg (./2020/01) — même logo/visuel, format ou recadrage redondant |
| `./2020/03/logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png` | quasi-doublon visuel de logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png (./2020/02) — même logo/visuel, format ou recadrage redondant |
| `./2020/03/cropped-favicon.png` | quasi-doublon visuel de favicon.png (./2020/03) — même logo/visuel, format ou recadrage redondant |
| `./2020/03/logo-la-centrale-des-metaux.jpg` | quasi-doublon visuel de logo-la-centrale-des-metaux.png (./2020/03) — même logo/visuel, format ou recadrage redondant |
| `./2020/03/cropped-logo-la-centrale-des-metaux.png` | quasi-doublon visuel de logo-la-centrale-des-metaux.png (./2020/03) — même logo/visuel, format ou recadrage redondant |
| `./2020/04/logo-la-centrale-des-metaux.jpg` | quasi-doublon visuel de logo-la-centrale-des-metaux.png (./2020/04) — même logo/visuel, format ou recadrage redondant |
| `./2020/04/cropped-logo-la-centrale-des-metaux.png` | quasi-doublon visuel de logo-la-centrale-des-metaux.png (./2020/04) — même logo/visuel, format ou recadrage redondant |
| `./2022/09/cropped-favicon-nouveau-logo-ferrailleur-93-.jpg` | quasi-doublon visuel de favicon-nouveau-logo-ferrailleur-93-.jpg (./2022/09) — même logo/visuel, format ou recadrage redondant |

## Table de correspondance (ancien → nouveau chemin)
| Ancien chemin | Catégorie | Nouveau chemin |
|---|---|---|
| `./2025/01/bg-dots.png` | autres | `autres/bg-dots.png` |
| `./2020/01/carte-villes-ile-de-france.jpg` | autres | `autres/carte-villes-ile-de-france.jpg` |
| `./2020/03/GOUVERNEMENT_LOGO.svg` | autres | `autres/gouvernement-logo.svg` |
| `./2020/03/recycling-304974_960_720.png` | autres | `autres/recycling-304974-960-720-2.png` |
| `./2020/02/recycling-304974_960_720.png` | autres | `autres/recycling-304974-960-720.png` |
| `./2020/11/G-MAGPIE.png` | icones-tiers | `icones-tiers/g-magpie.png` |
| `./2023/07/google-my-business-logo.jpg` | icones-tiers | `icones-tiers/google-my-business-logo.jpg` |
| `./2022/10/logo-google-maps.png` | icones-tiers | `icones-tiers/logo-google-maps.png` |
| `./2020/03/LOGO-GOOGLE-SERP.jpg` | icones-tiers | `icones-tiers/logo-google-serp.jpg` |
| `./2022/10/waze-logo.png` | icones-tiers | `icones-tiers/waze-logo.png` |
| `./2020/02/waze.jpeg` | icones-tiers | `icones-tiers/waze.jpeg` |
| `./2020/04/cropped-favicon.png` | logos-favicons | `logos-favicons/cropped-favicon.png` |
| `./2020/01/cropped-logo-2.jpg` | logos-favicons | `logos-favicons/cropped-logo-2.jpg` |
| `./2020/03/cropped-logo-la-centrale-des-metaux-1.png` | logos-favicons | `logos-favicons/cropped-logo-la-centrale-des-metaux-1.png` |
| `./2020/02/cropped-logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png` | logos-favicons | `logos-favicons/cropped-logo-mc-metal-recyclage-achat-de-metaux-ferreux-et-non-ferreux-95.png` |
| `./2020/01/cropped-logo.jpg` | logos-favicons | `logos-favicons/cropped-logo.jpg` |
| `./2020/04/favicon.png` | logos-favicons | `logos-favicons/favicon-2.png` |
| `./2022/09/favicon-nouveau-logo-ferrailleur-93-.jpg` | logos-favicons | `logos-favicons/favicon-nouveau-logo-ferrailleur-93.jpg` |
| `./2020/03/favicon.png` | logos-favicons | `logos-favicons/favicon.png` |
| `./2022/10/ferrailleur-93-la-centrale-des-métaux-logo-nouvelle-version-150.png` | logos-favicons | `logos-favicons/ferrailleur-93-la-centrale-des-metaux-logo-nouvelle-version-150.png` |
| `./2022/09/ferrailleur-93-la-centrale-des-métaux-logo-nouvelle-version.jpg` | logos-favicons | `logos-favicons/ferrailleur-93-la-centrale-des-metaux-logo-nouvelle-version.jpg` |
| `./2022/09/ferrailleur-93-la-centrale-des-métaux-logo-nouvelle-version.png` | logos-favicons | `logos-favicons/ferrailleur-93-la-centrale-des-metaux-logo-nouvelle-version.png` |
| `./2020/04/logo-la-centrale-des-metaux.png` | logos-favicons | `logos-favicons/logo-la-centrale-des-metaux-2.png` |
| `./2020/03/logo-la-centrale-des-metaux.png` | logos-favicons | `logos-favicons/logo-la-centrale-des-metaux.png` |
| `./2020/02/logo-mc-metal-ferrailleur-95-rachat-de-ferrail-95-achat-de-métaux.jpg` | logos-favicons | `logos-favicons/logo-mc-metal-ferrailleur-95-rachat-de-ferrail-95-achat-de-metaux.jpg` |
| `./2020/02/logo-mc-metal-recyclage-achat-de-métaux-ferreux-et-non-ferreux-95.png` | logos-favicons | `logos-favicons/logo-mc-metal-recyclage-achat-de-metaux-ferreux-et-non-ferreux-95.png` |
| `./2020/01/logo.jpg` | logos-favicons | `logos-favicons/logo.jpg` |
| `./2023/03/025087d7-6cba-46a0-9640-229803e35a9e.jpg` | photos-site | `photos-site/025087d7-6cba-46a0-9640-229803e35a9e.jpg` |
| `./2023/03/0b72eab4-6387-4bbb-a280-8ae3e781e3c9.jpg` | photos-site | `photos-site/0b72eab4-6387-4bbb-a280-8ae3e781e3c9.jpg` |
| `./2023/07/14-Juillet-2023-Lacentrale-des-metaux.jpg` | photos-site | `photos-site/14-juillet-2023-lacentrale-des-metaux.jpg` |
| `./2023/03/1787cab6-945b-46ed-bb67-0d413f878067.jpg` | photos-site | `photos-site/1787cab6-945b-46ed-bb67-0d413f878067.jpg` |
| `./2020/01/18bb20e3b95c.jpg` | photos-site | `photos-site/18bb20e3b95c.jpg` |
| `./2023/03/3e9f353e-11af-441f-8b26-07f57c361a13.jpg` | photos-site | `photos-site/3e9f353e-11af-441f-8b26-07f57c361a13.jpg` |
| `./2023/03/48e43a88-b438-4cc7-800e-3cea0c1a076b.jpg` | photos-site | `photos-site/48e43a88-b438-4cc7-800e-3cea0c1a076b.jpg` |
| `./2023/03/4bd6f54f-3b99-4e95-89f8-388e04d3c8d5.jpg` | photos-site | `photos-site/4bd6f54f-3b99-4e95-89f8-388e04d3c8d5.jpg` |
| `./2023/03/4e8d581c-f75b-4e6c-b09a-c16be7d763c2.jpg` | photos-site | `photos-site/4e8d581c-f75b-4e6c-b09a-c16be7d763c2.jpg` |
| `./2020/01/521d211066296aef49b1ff43b84a40e2.jpg` | photos-site | `photos-site/521d211066296aef49b1ff43b84a40e2.jpg` |
| `./2023/03/7409f938-8c63-4a78-b60e-066bb5282ae9.jpg` | photos-site | `photos-site/7409f938-8c63-4a78-b60e-066bb5282ae9.jpg` |
| `./2023/03/76c15d03-f455-4aac-9546-5c0987a87f71.jpg` | photos-site | `photos-site/76c15d03-f455-4aac-9546-5c0987a87f71.jpg` |
| `./2023/03/89988a84-9644-4bad-96e3-c468660d7d8f.jpg` | photos-site | `photos-site/89988a84-9644-4bad-96e3-c468660d7d8f.jpg` |
| `./2023/03/a21b8840-92cf-4eb4-926f-ee4c580b3b0b.jpg` | photos-site | `photos-site/a21b8840-92cf-4eb4-926f-ee4c580b3b0b.jpg` |
| `./2020/02/achat-de-batteries-usagées-mc-metal-recyclage.jpg` | photos-site | `photos-site/achat-de-batteries-usagees-mc-metal-recyclage.jpg` |
| `./2025/07/Achat-de-metaux-avec-la-centrale-des-metaux.png` | photos-site | `photos-site/achat-de-metaux-avec-la-centrale-des-metaux.png` |
| `./2020/02/achat-de-plomb-mc-metal-recyclage-achète-le-plomb.jpg` | photos-site | `photos-site/achat-de-plomb-mc-metal-recyclage-achete-le-plomb.jpg` |
| `./2020/02/achat-de-zinc-mc-recyclage.jpg` | photos-site | `photos-site/achat-de-zinc-mc-recyclage.jpg` |
| `./2020/02/achat-de-zinc-rachat-de-zinc-valorisation-dechats-de-toiture-mc-metal-recyclage.jpg` | photos-site | `photos-site/achat-de-zinc-rachat-de-zinc-valorisation-dechats-de-toiture-mc-metal-recyclage.jpg` |
| `./2025/07/Achat-des-metaux-au-meilleur-prix-la-centrale-des-metaux.png` | photos-site | `photos-site/achat-des-metaux-au-meilleur-prix-la-centrale-des-metaux.png` |
| `./2020/02/aluminium-achat-dalumium-95-mc-metal-recyclage.jpg` | photos-site | `photos-site/aluminium-achat-dalumium-95-mc-metal-recyclage.jpg` |
| `./2020/02/aluminium-mc-metal-recyclage-achat-daluminium.jpg` | photos-site | `photos-site/aluminium-mc-metal-recyclage-achat-daluminium.jpg` |
| `./2020/02/batteries-usagées-mc-metal-rachète-les-batteries-usagées.jpg` | photos-site | `photos-site/batteries-usagees-mc-metal-rachete-les-batteries-usagees.jpg` |
| `./2026/01/bonne-annee-2026-la-centrale-des-metaux.jpg` | photos-site | `photos-site/bonne-annee-2026-la-centrale-des-metaux.jpg` |
| `./2023/03/caafd23f-96b9-40dc-9828-d4bb5158e7c7.jpg` | photos-site | `photos-site/caafd23f-96b9-40dc-9828-d4bb5158e7c7.jpg` |
| `./2020/02/cuivre-recyclage-de-cuivre-mc-metal-recyclage.jpg` | photos-site | `photos-site/cuivre-recyclage-de-cuivre-mc-metal-recyclage.jpg` |
| `./2020/02/cuivre-vieux-métaux-achat-de-cuivre-mc-recyclage.jpg` | photos-site | `photos-site/cuivre-vieux-metaux-achat-de-cuivre-mc-recyclage.jpg` |
| `./2023/03/d3c6eb5a-29f2-4f12-975b-c6ef10686178.jpg` | photos-site | `photos-site/d3c6eb5a-29f2-4f12-975b-c6ef10686178.jpg` |
| `./2023/03/e1180115-9634-4ff5-8b1b-43cdf41aef5e.jpg` | photos-site | `photos-site/e1180115-9634-4ff5-8b1b-43cdf41aef5e.jpg` |
| `./2023/03/e9233a8a-cf61-4cdd-9031-c4ad7d24e33f.jpg` | photos-site | `photos-site/e9233a8a-cf61-4cdd-9031-c4ad7d24e33f.jpg` |
| `./2023/03/e94cf44a-9e1c-4d58-a2b9-e07e69893b8c.jpg` | photos-site | `photos-site/e94cf44a-9e1c-4d58-a2b9-e07e69893b8c.jpg` |
| `./2022/11/entree-la-centrale-des-metaux-950.jpg` | photos-site | `photos-site/entree-la-centrale-des-metaux-950.jpg` |
| `./2025/07/entree-la-centrale-des-metaux-a-epinay-sur-seine.jpg` | photos-site | `photos-site/entree-la-centrale-des-metaux-a-epinay-sur-seine.jpg` |
| `./2023/03/ferrailleur-93-la-centrale-des-métaux-256-90.png` | photos-site | `photos-site/ferrailleur-93-la-centrale-des-metaux-256-90.png` |
| `./2022/10/ferrailleur-93-la-centrale-des-métaux-256.png` | photos-site | `photos-site/ferrailleur-93-la-centrale-des-metaux-256.png` |
| `./2025/07/icone-accueil-la-centrale-des-metaux.png` | photos-site | `photos-site/icone-accueil-la-centrale-des-metaux.png` |
| `./2020/01/IMG1507JPG_5976144ba7110.jpg` | photos-site | `photos-site/img1507jpg-5976144ba7110.jpg` |
| `./2022/11/la-centrale-des-metaux-ceryclage-du-metal.jpg` | photos-site | `photos-site/la-centrale-des-metaux-ceryclage-du-metal.jpg` |
| `./2022/11/la-centrale-des-metaux-entree.jpg` | photos-site | `photos-site/la-centrale-des-metaux-entree.jpg` |
| `./2020/11/la-centrale-des-métaux-info-covid.jpg` | photos-site | `photos-site/la-centrale-des-metaux-info-covid.jpg` |
| `./2020/02/laiton.jpg` | photos-site | `photos-site/laiton.jpg` |
| `./2020/02/mc-metal-achat-de-métaux-ferrailleur-95-.jpg` | photos-site | `photos-site/mc-metal-achat-de-metaux-ferrailleur-95.jpg` |
| `./2020/02/mc-metal-recyclacge-pose-de-bennes-qur-chantier.jpg` | photos-site | `photos-site/mc-metal-recyclacge-pose-de-bennes-qur-chantier.jpg` |
| `./2020/01/metal.jpg` | photos-site | `photos-site/metal.jpg` |
| `./2020/01/metal2.jpg` | photos-site | `photos-site/metal2.jpg` |
| `./2025/07/metaux-non-ferreux-la-centrale-des-metaux.png` | photos-site | `photos-site/metaux-non-ferreux-la-centrale-des-metaux.png` |
| `./2020/02/moteurs-électriques-recyclage.jpg` | photos-site | `photos-site/moteurs-electriques-recyclage.jpg` |
| `./2022/12/noel-la-centrale-des-metaux.jpg` | photos-site | `photos-site/noel-la-centrale-des-metaux.jpg` |
| `./2022/12/noel-sans-horaires.jpg` | photos-site | `photos-site/noel-sans-horaires.jpg` |
| `./2020/01/plomb.jpg` | photos-site | `photos-site/plomb.jpg` |
| `./2020/02/rachat-de-zinc-mc-metal-recyclage.jpg` | photos-site | `photos-site/rachat-de-zinc-mc-metal-recyclage.jpg` |
| `./2022/11/reciperation-de-batteries-la-centrale-des-metaux.jpg` | photos-site | `photos-site/reciperation-de-batteries-la-centrale-des-metaux.jpg` |
| `./2022/11/recuperation-du-cuivre-ferrailleur-93-la-centrale-des-metaux.jpg` | photos-site | `photos-site/recuperation-du-cuivre-ferrailleur-93-la-centrale-des-metaux.jpg` |
| `./2020/01/recycl_f_m_c_01436600_113958882.jpg` | photos-site | `photos-site/recycl-f-m-c-01436600-113958882.jpg` |
| `./2020/02/recyclage-de-moteurs-électriques-mc-metal-.jpg` | photos-site | `photos-site/recyclage-de-moteurs-electriques-mc-metal.jpg` |
| `./2020/02/recyclage-des-déchets-du-batiment-pose-de-bennes-de-récupération-mc-metal.jpg` | photos-site | `photos-site/recyclage-des-dechets-du-batiment-pose-de-bennes-de-recuperation-mc-metal.jpg` |
| `./2020/01/Recyclage-et-tri-des-metaux.jpg` | photos-site | `photos-site/recyclage-et-tri-des-metaux.jpg` |
| `./2020/01/recyclage-fer-et-metaux-praxy-e1507210441846.jpg` | photos-site | `photos-site/recyclage-fer-et-metaux-praxy-e1507210441846.jpg` |
| `./2025/07/reglementation-achat-et-vente-de-metaux-icone-la-centrale-des-metaux.png` | photos-site | `photos-site/reglementation-achat-et-vente-de-metaux-icone-la-centrale-des-metaux.png` |
| `./2020/01/ruin_crash_broken_destroyed_building_demolition_debris_building_rubble-776190.jpg` | photos-site | `photos-site/ruin-crash-broken-destroyed-building-demolition-debris-building-rubble-776190.jpg` |
| `./2025/12/sapin-noel-dans-la-cour-de-comemrces-a-paris-75-mon-arbre-de-noel.jpg` | photos-site | `photos-site/sapin-noel-dans-la-cour-de-comemrces-a-paris-75-mon-arbre-de-noel.jpg` |
| `./2020/02/unnamed.jpg` | photos-site | `photos-site/unnamed.jpg` |
| `./2022/11/vue-sur-entree-la-centrale-des-metaux.jpg` | photos-site | `photos-site/vue-sur-entree-la-centrale-des-metaux.jpg` |
| `./2020/02/zinc-achat-de-zinc-recyclage-de-zinc-mc-metal-recyclage.jpg` | photos-site | `photos-site/zinc-achat-de-zinc-recyclage-de-zinc-mc-metal-recyclage.jpg` |
