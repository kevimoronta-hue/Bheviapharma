#!/bin/bash
# Bhevia Pharma — Lancer le serveur local
cd "$(dirname "$0")"
echo "🚀 Lancement de Bhevia Pharma en local..."
echo "📎 Ouvre : http://localhost:3333"
open "http://localhost:3333"
python3 -m http.server 3333
