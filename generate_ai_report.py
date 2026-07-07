name: AMRC Daily AI Update

on:
  schedule:
    - cron: '0 23 * * *'
  workflow_dispatch:

jobs:
  update:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Fetch Market
        run: python automation/fetch_market.py
      - name: Generate AI Report
        run: python automation/generate_ai_report.py
      - name: Save
        run: echo "Update completed"
