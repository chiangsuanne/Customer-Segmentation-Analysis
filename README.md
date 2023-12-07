# Customer Segmentation Analysis  
## Introduction 
### Company Overview
Zomato is a multinational restaurant aggregator and food delivery company, committed to revolutionizing the way people experience dining and food services. With a vast network of restaurants and a user-friendly platform, Zomato aims to connect food enthusiasts with diverse culinary experiences while providing convenient and efficient food delivery services. Zomato has embarked on a strategic initiative to enhance its understanding of customer demographics and purchasing behavior. 
### Objective
The overarching objective of this project is to dissect Zomato's customer base through detailed segmentation analysis. By scrutinizing demographic attributes and purchasing behaviors, the aim is to extract actionable insights that will guide decision-making and drive sustainable business growth. The primary goal is to unravel insights from extensive datasets, empowering Zomato to optimize marketing strategies, refine customer targeting, and elevate the overall user experience.

## Data Set
- Users table (https://github.com/chiangsuanne/Customer-Segmentation-Analysis/blob/main/users.csv)
- Orders table (https://github.com/chiangsuanne/Customer-Segmentation-Analysis/blob/main/orders.csv)

## Tools
Tableau for joining and cleaning data for analysis and visualization

## Project Analysis
1. **Customer Segmentation Insights**
    - *Objective:* Identify and categorize customers based on Recency, Frequency, and Monetary metrics.  
    - *Outcome:* Highlight key customer segments, including Best Customers, Big Spenders, and Loyal Customers.  
    - *Actionable Insights:* Inform targeted marketing strategies and enhance customer engagement.
2. **Purchasing Behavior Analysis**
    - *Objective:* Analyze purchasing behavior patterns through a Time Series Line Chart, focusing on order trends by yearly quarter. 
    - *Outcome:* Identify peak order quarters to optimize promotional activities and resource allocation.  
    - *Actionable Insights:* Enable strategic planning for promotions and enhance resource efficiency.
3. **Demographics Insights Integration**
    - *Objective:* Integrate demographic breakdown (age, gender) visualization.  
    - *Outcome:* Understand the age and gender distribution of Zomato's customer base.  
    - *Actionable Insights:* Tailor marketing campaigns to specific demographic groups, enhancing personalized user experiences.
4. **Total Sales Value for Best Customers:**
    - *Objective:* Compute the total sales value for the top Best Customers segment, sorted in descending order.
    - *Outcome:* Identify high-value customers contributing significantly to Zomato's revenue.
    - *Actionable Insights:* Tailor promotional efforts and loyalty programs to maximize engagement with high-value customers.

## Dashboard
View dynamic [dashboard](https://public.tableau.com/views/CustomerSegmentationAnalysis_16963810307130/CustomerSegmentationAnalysis?:language=en-US&:display_count=n&:origin=viz_share_link)  

![image](https://github.com/chiangsuanne/Customer-Segmentation-Analysis/assets/108243961/9a12b2d1-7504-41ef-ac26-b237fc09f45d)  

## Executive Summary
### Conclusion
1. **RFM Customer Segments:**
    - The RFM analysis reveals distinct customer segments, with Occasional Buyers, Loyal Customers, and Big Spenders emerging as the top three prominent groups. The descending order indicates varying levels of customer engagement and spending habits.  
    - The descending order of customer segments prompts considerations for targeted marketing strategies, loyalty programs, and personalized engagement to further strengthen the bond with the top-performing customer groups.
2. **RFM Segment Details:**
    - Detailed insights into RFM segments highlight the significant characteristics of each group. For instance, Best Customers, spending an average of $46,909, placing 4 orders on average, and exhibiting the least recency with orders placed 87 days ago, underscore the importance of personalized engagement and retention efforts.  
    - This detailed understanding opens avenues for tailoring marketing campaigns, loyalty rewards, and personalized communications based on the specific behaviors and preferences of each customer segment.
3. **RFM Segment Sales Over Time:**
    - Visualizing sales trends over time showcases dynamic changes in customer behavior. Notably, the increase in both spending and count of Best Customers and Recent Buyers from 2019 Q4 to 2020 Q1 contrasts with the declining trends in both amount spent and count of Loyal Customers during the same period.  
    - This temporal analysis prompts considerations for identifying and capitalizing on the factors contributing to the growth of specific customer segments, while addressing challenges faced by declining segments. Strategic adjustments can be made to align with evolving customer preferences.
4. **Demographics Insights:**
    - The demographic analysis identifies key insights, with females in the 21-25 age group and a monthly income exceeding 50,000 emerging as the highest average sales contributors. Additionally, females in the 26-30 age group, with a monthly income below 10,000, rank second in average sales.  
    - This demographic understanding presents opportunities for targeted marketing, product recommendations, and pricing strategies tailored to the preferences and spending capacity of specific demographic segments.

### Suggestions for Further Improvement and Business Outcomes
1. **Targeted Marketing Campaigns:**
    - *Suggestion:* Develop personalized marketing campaigns tailored to the top-performing RFM segments—Occasional Buyers, Loyal Customers, and Big Spenders. Leverage insights from the demographic analysis to create targeted promotions that resonate with specific age and income groups.
    - *Expected Outcome:* Increased customer engagement, higher conversion rates, and enhanced loyalty from top-performing segments, resulting in sustained revenue growth.
2. **Enhanced Loyalty Programs:**
    - *Suggestion:* Introduce or enhance loyalty programs specifically designed to cater to the needs and preferences of Best Customers. Offer exclusive rewards, early access to new products, or personalized discounts to encourage repeat purchases.
    - *Expected Outcome:* Strengthened customer loyalty among the Best Customers segment, leading to increased customer lifetime value and a positive impact on overall sales.
3. **Dynamic Pricing Strategies:**
    - *Suggestion:* Implement dynamic pricing strategies based on the purchasing power of different demographic segments. Adjust pricing, discounts, or promotions to align with the spending capacity and preferences of females in the 21-25 age group with higher incomes and those in the 26-30 age group with lower incomes.
    - *Expected Outcome:* Optimized pricing structures that resonate with the target audience, resulting in improved conversion rates and increased average sales amounts.
4. **Retention Strategies for Declining Segments:**
    - *Suggestion:* Develop targeted retention strategies for declining segments, such as Loyal Customers. Implement personalized communication, exclusive offers, or loyalty incentives to re-engage customers and mitigate the observed declining trends.
    - *Expected Outcome:* Reversed decline in sales from declining segments, fostering renewed loyalty and preventing customer attrition.
5. **Continuous Monitoring and Adaptation:**
    - *Suggestion:* Establish a framework for continuous monitoring of RFM segments and demographic trends. Regularly update strategies based on evolving customer behavior, ensuring the company remains agile in responding to market dynamics.
    - *Expected Outcome:* Timely identification of shifts in customer preferences and the ability to proactively adapt marketing, pricing, and retention strategies for sustained business growth.

Implementing these suggestions will contribute to a more customer-centric approach, enhancing the overall effectiveness of marketing and sales efforts. By tailoring strategies to the unique characteristics of each segment and demographic group, the company can foster long-term customer relationships, drive revenue growth, and maintain a competitive edge in the market.
