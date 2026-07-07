name: AMRC Daily AI

on:
  schedule:
    - cron: '0 23 * * *'
  workflow_dispatch:

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: python automation/fetch_market.py
      - run: python automation/generate_ai_report.py
