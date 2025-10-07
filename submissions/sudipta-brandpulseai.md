# Hackathon Submission: BrandPulse AI

## GitHub handle

[sudiptadas](https://github.com/sdass1918)

## Project Title

BrandPulse AI

## Project Description

BrandPulse AI accepts a brand query, uses Google Gemini to analyze relevant Reddit discussions, extracts sentiment and topics, then displays insights in a real-time dashboard. Companies get instant, unfiltered feedback from actual users.

## How It Works

1. **Input**: Receive brand/product query via HTTP request
2. **Analysis**: Gemini aggregates Reddit text and extracts sentiment, topic, and summary
3. **Storage**: Save results to Appwrite database with fields: content, sentiment, topic, source, userQuery
4. **Display**: Dashboard visualizes brand health metrics in real-time

## Key Features

- Real-time sentiment analysis (positive/negative/neutral)
- Topic extraction from user conversations
- Appwrite integration for data persistence and real-time updates
- React dashboard with Chart.js visualizations

## Inspiration behind the Project

The inspiration comes from the disconnect between companies and their real users. Traditional surveys are slow, while a goldmine of honest, unsolicited feedback exists in online communities like Reddit. I wanted to build a tool that acts as a bridge, using modern AI to listen to these conversations at scale and translate them into actionable insights for product improvement and market research.


## Tech Stack

- **Frontend:** React (with Vite), Chart.js for data visualization.
- **Backend:** Appwrite Cloud (as a complete Backend-as-a-Service).
- **AI Model:** Google Gemini API for sentiment analysis and topic extraction.
- **Data Source:** Gemini web scraper, Reddit API.
- **Deployment:** Appwrite sites.

### Appwrite products

- [x] Auth
- [x] Databases
- [x] Functions
- [ ] Storage
- [ ] Messaging
- [x] Realtime
- [x] Sites

## Project Repo

https://github.com/sdass1918/BrandPulse-AI

## Deployed Site URL

https://brandpulse-ai.appwrite.network/

## Demo Video/Photos

https://youtu.be/w8V5ZHTd6yY