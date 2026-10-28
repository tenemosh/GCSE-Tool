const UN={u1:'Business Activity',u2:'Marketing',u3:'People',u4:'Operations',u5:'Finance',u6:'Influences',u7:'Interdependence'};
const ICON={u1:'💡',u2:'📣',u3:'👥',u4:'🏭',u5:'💷',u6:'🌍',u7:'🔗'};
const L=s=>s.trim().split('\n').map(l=>l.split('|').map(x=>x.trim()));
const mkr=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const R=mkr(77);
const ri=(a,b)=>a+Math.floor(R()*(b-a+1));
const pk=a=>a[ri(0,a.length-1)];
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(R()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const r1=v=>Math.round(v*10)/10;
const gbp=v=>'£'+Number(v).toLocaleString('en-GB'),pc=v=>v+'%',nu=v=>Number(v).toLocaleString('en-GB'),pe=v=>v+'p';
const cap=s=>s[0].toUpperCase()+s.slice(1);
const BZ=['a bakery','a gym','a toy shop','a coffee shop','a bike repair shop','a hair salon','a phone case seller','a takeaway','a florist','a gaming café','a bookshop','a clothing start-up'];
const NM=['Aisha','Ben','Chloe','Dev','Ella','Freddie','Grace','Hamza','Isla','Jack','Kira','Leo','Maya','Noah'];

const F={
u1:L(`
Entrepreneur|A person who takes the risk of starting and running a business
Enterprise|Willingness to take risks to start up a new business idea
Invention|Creating a brand new product or process that did not exist before
Innovation|Introducing a new or improved product or way of doing something
Risk|The chance that something unexpected will cause a business to lose money
Reward|The benefit, usually profit, gained from taking a business risk
Opportunity cost|The next best alternative given up when a choice is made
Revenue|The money a business receives from selling goods or services
Profit|Revenue minus total costs
Fixed costs|Costs that do not change with output, such as rent
Variable costs|Costs that change as output changes, such as raw materials
Sole trader|A business owned and run by one person with unlimited liability
Partnership|A business owned by two or more people who share responsibility and unlimited liability
Private limited company (Ltd)|A company whose shares cannot be sold to the general public
Public limited company (PLC)|A company whose shares can be bought and sold on the stock exchange
Franchise|A business that pays to use another firm's brand name, products and methods
Franchisor|The business that sells the right to use its brand and methods
Franchisee|The business that pays to operate using another firm's brand
Social enterprise|A business that trades to achieve social or environmental aims and reinvests its profits in them
Not-for-profit organisation|An organisation set up to support a cause rather than to make profit for owners
Unlimited liability|Owners are personally responsible for all the debts of the business
Limited liability|Owners can only lose the amount they invested in the business
Shareholder|An owner of a company who holds shares in it
Dividend|A share of company profit paid out to shareholders
Stakeholder|Any individual or group with an interest in the activities of a business
Survival|A business aim of staying in business, common for new start-ups
Aim|The overall long-term goal of a business
Business objective|A specific target a business sets to achieve its aims
Profit maximisation|An aim of making as much profit as possible
Market share|The percentage of total sales in a market held by one business
Business plan|A document setting out a business's aims, target market, finances and strategy
Capital|Money invested in a business to set it up and run it
Internal (organic) growth|Growth by expanding within the business, such as opening new outlets
External growth|Growth by joining with or taking over another business
Merger|Two businesses agreeing to join together to form one
Takeover|One business buying enough shares to gain control of another
Economies of scale|A fall in average cost per unit as output increases
Diversification|Selling new products in new markets to spread risk
Public sector|Organisations owned and controlled by the government
Private sector|Businesses owned by individuals or groups rather than the government
Primary sector|Industries that extract raw materials, such as farming and mining
Secondary sector|Industries that manufacture goods from raw materials
Tertiary sector|Industries that provide services, such as retail and banking
Added value|The difference between the selling price and the cost of the materials bought in
`),
u2:L(`
Market|Where buyers and sellers come together to trade a product
Market research|Collecting and analysing information about customers, competitors and the market
Primary research|First-hand data collected directly for a specific purpose
Secondary research|Using data that already exists, collected by someone else
Quantitative data|Numerical data that can be counted and measured
Qualitative data|Descriptive data about opinions, feelings and reasons
Questionnaire|A set of written questions used to gather data from a sample of people
Focus group|A small group who discuss a product so a business can gather opinions
Sample|A selected group of people who represent the whole target market
Market segmentation|Dividing a market into groups of customers with similar characteristics
Target market|The specific group of customers a business aims its product at
Niche market|A small specialist part of a larger market
Mass market|A large market selling to a wide range of customers
Marketing mix|The four Ps: product, price, place and promotion
Unique selling point (USP)|A feature that makes a product different from its competitors
Product life cycle|The stages a product passes through from launch to withdrawal
Extension strategy|Action taken to lengthen the life of a product before it declines
Branding|Giving a product a name, logo and image to distinguish it from rivals
Price skimming|Setting a high price for a new product, then lowering it over time
Penetration pricing|Setting a low initial price to gain market share quickly
Cost-plus pricing|Adding a fixed percentage mark-up to the cost of making a product
Competitive pricing|Setting prices similar to those of rival businesses
Promotional pricing|Temporary price cuts such as buy-one-get-one-free offers to boost sales
Loss leader|A product sold below cost to attract customers into a shop
Distribution channel|The route a product takes from producer to customer
Retailer|A business that sells products to the final customer
Wholesaler|A business that buys in bulk from producers and sells smaller amounts to retailers
Advertising|Paid communication that aims to persuade customers to buy a product
Sales promotion|Short-term incentives such as discounts or free gifts to boost sales
Public relations (PR)|Managing a business's image through media coverage and events
Sponsorship|Paying to have a business name linked with an event, team or person
Direct marketing|Promoting directly to individual customers, for example by email or post
Social media marketing|Promoting products through platforms such as Instagram and TikTok
Digital marketing|Using online channels to promote products
Customer loyalty|Customers repeatedly choosing the same business over its competitors
Competitor|A business that sells similar products to the same target customers
Market map|A diagram that plots competing products on two characteristics such as price and quality
Market size|The total sales or total number of customers in a market
Point of sale|The place where a purchase is completed, often used for promotional displays
Product trial|Letting customers try a product before they decide to buy
Introduction stage|The product life cycle stage where a new product is launched and sales are low
Growth stage|The product life cycle stage where sales rise rapidly
Maturity stage|The product life cycle stage where sales level off
Decline stage|The product life cycle stage where sales fall
`),
u3:L(`
Organisational structure|How a business is arranged into levels of authority and responsibility
Hierarchy|The levels of management in a business arranged from top to bottom
Chain of command|The line of authority from top management down to the lowest-level employees
Span of control|The number of employees a manager is directly responsible for
Delegation|Passing authority for a task down to a subordinate
Tall structure|An organisation with many levels of hierarchy and narrow spans of control
Flat structure|An organisation with few levels of hierarchy and wide spans of control
Centralised decision-making|Decisions are made by senior managers at the top of the business
Decentralised decision-making|Decisions are passed down to lower levels or local branches
Full-time employee|A worker who works the standard full working week
Part-time employee|A worker who works fewer hours than a full-time worker
Zero-hours contract|A contract with no guaranteed hours where the worker is called in when needed
Temporary contract|Employment that lasts for a fixed period of time
Flexible working|Arrangements that let employees vary when or where they work
Recruitment|The process of finding and attracting people to apply for a job
Selection|Choosing the best candidate from those who applied
Job description|A document listing the duties and responsibilities of a role
Person specification|A document listing the skills, qualifications and qualities needed for a role
Internal recruitment|Filling a vacancy with an existing employee
External recruitment|Filling a vacancy with someone from outside the business
Curriculum vitae (CV)|A summary of a person's education, skills and work experience
Interview|A meeting where candidates answer questions so an employer can judge their suitability
Induction training|Training that introduces new employees to the business, its rules and colleagues
On-the-job training|Learning while doing the job, guided by an experienced colleague
Off-the-job training|Training away from the workplace, such as at a college or on a course
Apprenticeship|Combining paid work with training to gain a recognised qualification
Motivation|The desire to work hard and do a good job
Piece rate|Pay based on the number of items an employee produces
Commission|Pay based on a percentage of the sales an employee makes
Salary|A fixed annual payment, usually paid monthly
Wage|Pay based on the number of hours worked
Bonus|An extra payment for meeting a target or performing well
Profit sharing|Employees receive part of the business's profit
Fringe benefits|Non-cash rewards such as a company car or gym membership
Job rotation|Moving employees between different tasks to reduce boredom
Job enrichment|Giving employees more challenging and responsible tasks
Empowerment|Giving employees the authority to make their own decisions
Labour turnover|The rate at which employees leave a business
Absenteeism|Employees being away from work when they are expected to be there
Retention|Keeping existing employees in the business
Trade union|An organisation that represents workers' interests, for example over pay
National Minimum Wage|The lowest hourly rate that employers are legally allowed to pay
Redundancy|When an employee loses their job because the role is no longer needed
Discrimination|Treating someone unfairly because of a protected characteristic such as age or gender
`),
u4:L(`
Production|The process of making goods or providing services
Job production|Making a single unique item at a time to a customer's order
Batch production|Making a group of identical products together, one stage at a time
Flow production|Continuous production of standardised products on a production line
Productivity|The amount of output produced per worker in a given time
Efficiency|Using resources with as little waste as possible
Capacity|The maximum output a business can produce
Capacity utilisation|The proportion of maximum output that is actually being used
Automation|Using machines and technology to do tasks previously done by people
Robotics|Using programmable machines to carry out tasks such as assembly
Computer-aided design (CAD)|Using computer software to design products
Computer-aided manufacture (CAM)|Using computers to control machinery that makes products
Lean production|Methods that aim to cut waste while keeping quality high
Just-in-time (JIT)|Receiving stock exactly when needed so very little is held
Just-in-case|Holding large amounts of stock in case of unexpected demand
Buffer stock|The minimum level of stock held to cope with unexpected demand
Stock control|Managing the amount of stock a business holds
Lead time|The time between ordering stock and receiving it
Quality|How well a product meets customer expectations
Quality control|Inspecting products at the end of production to find faults
Quality assurance|Preventing faults by checking quality at every stage of production
Total quality management (TQM)|Making every employee responsible for quality throughout the business
Waste|Resources that are not used efficiently or are thrown away
Customer service|The help and support given to customers before, during and after a sale
After-sales service|Support given after purchase, such as repairs, returns or helplines
Consumer Rights Act 2015|The law saying goods must be of satisfactory quality, fit for purpose and as described
Trading standards|The service that enforces consumer protection laws
Supplier|A business that provides raw materials, components or services to another business
Supply chain|The sequence of businesses involved from raw materials to the final customer
Procurement|The process of buying goods and services from suppliers
Trade credit|Buying goods now and paying the supplier later
Logistics|Managing the movement of goods from supplier to customer
Outsourcing|Paying another business to carry out part of your operations
Location|The place where a business carries out its operations
Proximity to market|Being located close to customers
Operations management|Planning and controlling how goods and services are produced
Scale of production|The level of output a business produces
E-commerce|Buying and selling goods and services over the internet
Click and collect|Ordering online and collecting the goods from a store
Fit for purpose|Goods can do the job they are designed and sold for
Satisfactory quality|Goods are free from faults and last a reasonable time
Kitemark|A symbol showing a product meets British quality and safety standards
Returns policy|A business's rules on refunds and exchanges for unwanted or faulty goods
`),
u5:L(`
Retained profit|Profit kept in the business and reinvested rather than paid out
Owner's capital|Money put into the business by its owner
Sale of assets|Selling items the business owns to raise cash
Bank loan|A fixed sum borrowed and repaid with interest over an agreed period
Overdraft|A facility to spend more than is in the bank account, up to a limit
Share capital|Money raised by selling shares in a company
Venture capital|Investment from specialist investors who take a share of ownership
Crowdfunding|Raising small amounts of money from many people, usually online
Leasing|Paying regular rent to use an asset without owning it
Mortgage|A long-term loan used to buy property
Interest|The cost of borrowing money
Cash flow|The money moving into and out of a business over time
Cash flow forecast|A prediction of future cash inflows and outflows
Cash inflow|Money coming into a business
Cash outflow|Money leaving a business
Liquidity|The ability of a business to pay its short-term debts
Break-even|The point where total revenue equals total costs
Margin of safety|The gap between actual output and break-even output
Gross profit|Revenue minus cost of sales
Net profit|Gross profit minus expenses and overheads
Average rate of return (ARR)|The average yearly profit from an investment shown as a percentage of its cost
Budget|A financial plan setting targets for income and spending
Insolvency|When a business cannot pay its debts
`),
u6:L(`
Ethics|Moral principles that guide how a business behaves
Fairtrade|A scheme guaranteeing farmers and producers a fair price for their goods
Corporate social responsibility (CSR)|A business acting in ways that benefit society and the environment
Pressure group|An organised group that tries to influence business decisions
Sustainability|Meeting today's needs without harming future generations' ability to meet theirs
Carbon footprint|The total greenhouse gases produced by a business's activities
Inflation|A general rise in prices over time
Interest rate|The cost of borrowing money and the reward for saving it
Exchange rate|The value of one currency in terms of another
Unemployment|People who are able and willing to work but do not have a job
Recession|A fall in a country's economic output for two or more consecutive quarters
Economic growth|An increase in the amount a country produces
Corporation tax|A tax on company profits
VAT|A tax added to the price of most goods and services
Globalisation|The increasing connection of businesses and economies around the world
Multinational|A business that operates in several countries
Import|Buying goods or services from another country
Export|Selling goods or services to another country
Tariff|A tax on imported goods
Health and Safety at Work Act|The law requiring employers to provide a safe workplace
Equality Act 2010|The law protecting people from discrimination
Consumer protection legislation|Laws that safeguard customers from unfair or faulty goods
`),
u7:L(`
Interdependence|When decisions made in one business function affect the other functions
Trade-off|Giving up one benefit in order to gain another
Functional areas|The departments of a business such as marketing, finance, operations and HR
Competitive advantage|Something that makes a business better than its rivals
Cost-benefit decision|Weighing up the costs of a choice against its benefits
Short-term decision|A choice that affects the business over weeks or months
Long-term decision|A choice that affects the business over several years
Resistance to change|Employees opposing new ways of working
Stakeholder conflict|When different stakeholder groups want opposing things from the business
Quality versus cost trade-off|Higher quality often means higher costs, so the business must balance the two
Growth and finance link|Growing a business usually needs extra finance and extra staff
Marketing and operations link|Higher demand from promotion requires production to be able to keep up
Business decision|A choice made by managers to help the business achieve its objectives
Justified conclusion|A final judgement in an exam answer supported by reasons and evidence
`)};

/* ---------- PROS & CONS: concept | advantages ; ; | disadvantages ; ; ---------- */
const PCD={
u1:L(`
being a sole trader|The owner keeps all of the profit;It is quick and cheap to set up;The owner has full control of decisions|The owner has unlimited liability for debts;It is hard to raise large amounts of finance;The owner may struggle to take time off
being in a partnership|The workload and skills are shared;More capital can be raised than by one person;Decisions can be discussed between partners|Partners usually have unlimited liability;Profits have to be shared;Partners may disagree about decisions
becoming a private limited company|Owners have limited liability;Shares can be sold privately to raise capital;The business continues if an owner leaves|There is more legal paperwork to set up;Shares cannot be sold to the general public;Accounts must be made available to the public
becoming a public limited company (PLC)|Very large sums can be raised by selling shares;Shareholders have limited liability;Being well known improves credibility|There is a risk of being taken over;Strict rules on publishing information;Pressure from shareholders to pay dividends
buying a franchise|There is an established brand with existing customers;The franchisor provides training and support;It is less risky than starting from scratch|Fees and a share of sales must be paid to the franchisor;The franchisee must follow the franchisor's rules;There is little freedom to be creative
being a social enterprise|It builds a positive reputation;It attracts customers who care about the cause;It may qualify for grants and support|Profits are reinvested so owners earn less;It can be hard to balance social and financial aims;It may find it difficult to raise finance
growing by merger or takeover|The business grows in size very quickly;It gains customers and market share quickly;It can benefit from economies of scale|It can be very expensive;Different business cultures may clash;Jobs may be lost causing low morale
growing internally (organically)|It is lower risk and easier to control;The owners keep control of the business;The existing culture is kept|Growth is slow;Growth must be funded by the business itself;It is limited by the finance available
`),
u2:L(`
using primary research|The data is specific to the business's needs;The information is up to date;The results can be kept private from rivals|It can be expensive to collect;It takes a long time;Small samples may be unrepresentative
using secondary research|It is cheaper than collecting new data;It is quick to obtain;A wide range of information is available|The data may be out of date;It may not be specific to the business's needs;Competitors can access the same information
using social media marketing|It can reach a large audience cheaply;Adverts can be targeted at specific groups;Customers can give instant feedback|Negative comments can spread quickly;Accounts need constant updating;The impact on sales is hard to measure
using penetration pricing|It gains market share quickly;It attracts price-sensitive customers;It can discourage new competitors|Profit margins are low at first;It can be hard to raise the price later;Customers may think quality is low
using price skimming|There is a high profit per unit early on;It helps recover development costs;It creates an exclusive image|Fewer customers buy at first;Competitors may enter with lower prices;Customers may wait for the price to fall
selling online (e-commerce)|The business is open 24 hours a day;It can reach customers anywhere;There are no costs of renting shop premises|Delivery costs and delays can occur;There are cyber security risks;Customers cannot see or try products first
using television advertising|It reaches a mass audience;It combines sound and moving images;It builds brand awareness|It is very expensive;It is not targeted at specific customers;Viewers may skip or ignore adverts
targeting a niche market|There is less competition;Customers may pay higher prices;It can build strong customer loyalty|The market is small so sales are limited;The business is at risk if demand changes;It can be hard to grow
targeting a mass market|There are many potential customers;It can benefit from economies of scale;Sales and revenue can be high|There is more competition;Profit margins can be lower;It is hard to appeal to everyone
`),
u3:L(`
using a tall organisational structure|There is a clear chain of command;Staff are closely supervised;There is a clear promotion path|Communication is slow;Many managers means high wage costs;Employees can feel less empowered
using a flat organisational structure|Communication is faster;Fewer managers lowers wage costs;Employees have more responsibility|Managers may be overloaded by a wide span of control;There are fewer promotion opportunities;There is less supervision of staff
recruiting internally|It is cheaper and quicker;The candidate already knows the business;It motivates other staff with promotion chances|There is a limited pool of candidates;It creates another vacancy to fill;No new ideas come into the business
recruiting externally|There is a wider choice of candidates;New skills and ideas come into the business;Specialist skills can be found|Advertising and selection are more expensive;It takes longer;The new person may not fit in with the culture
using on-the-job training|It is cheaper than sending staff away;The employee is productive while learning;The training is relevant to the job|The trainer is less productive;Mistakes may be made;Bad habits can be passed on
using off-the-job training|Specialist trainers can be used;Employees can gain recognised qualifications;Employees learn new ideas from outside the business|It is more expensive;The employee is away from work;The skills may not be relevant to the job
paying staff piece rate|It encourages high output;Employees are paid for what they produce;It is easy to calculate pay|Quality may fall as workers rush;Workers have an unstable income;It is unsuitable for service jobs
using zero-hours contracts|The business can match staff to demand;Costs are lower when it is quiet;It is easy to hire extra staff quickly|Employees have no job security;It can lower staff motivation;It may lead to high labour turnover
using job enrichment|Employees are more motivated;Absenteeism may fall;Employees develop new skills|It takes time and training;Employees may expect higher pay;Some employees may not want more responsibility
`),
u4:L(`
using job production|Products are unique and match customer needs;Quality is usually very high;High prices can be charged|It is slow;It needs skilled and expensive labour;The cost per unit is high
using batch production|It is flexible, as the product can be changed between batches;Unit costs are lower than job production;It can meet varying demand|Machines must be reset between batches;Stock must be stored between stages;Time is lost changing between batches
using flow production|The cost per unit is low;Output is very high;Less skilled labour is needed|Set-up costs are high;It is inflexible;A breakdown can stop the whole line
using automation|Production is faster;Quality is more consistent;Machines can work 24 hours a day|Initial costs are high;Jobs may be lost;Breakdowns and maintenance are costly
using just-in-time stock control|Storage costs are low;There is less waste;Cash is not tied up in stock|Late deliveries can stop production;There is no buffer if demand rises;The business relies heavily on suppliers
holding buffer stock|The business can meet sudden demand;It protects against late deliveries;Production can continue|Storage costs are high;Stock may become out of date;Cash is tied up in stock
outsourcing|Specialist expertise is gained;Staff can focus on core activities;It can lower costs|The business has less control over quality;It relies on another firm;Confidential information may be at risk
using total quality management|There are fewer faults;The business reputation improves;There is less waste|Training costs are high;It takes time to introduce;It needs all staff to cooperate
offering good customer service|It encourages repeat customers;It improves the business's reputation;It can allow higher prices|Staff training and wages cost money;It takes time;After-sales support can be costly
`),
u5:L(`
using retained profit|There is no interest to pay;It does not have to be repaid;The owners keep control|It is only available if the business is profitable;It limits how fast the business can grow;Owners receive lower profit payouts
taking out a bank loan|Large sums are available;Fixed repayments make planning easy;It can be repaid over a long period|Interest must be paid;Security may be needed;It must be repaid even if the business struggles
using an overdraft|It is flexible for short-term cash gaps;It is quick to arrange;Interest is only paid on the amount used|Interest rates are high;The bank can demand repayment;It is only suitable for the short term
selling shares to raise finance|There is no repayment needed;Large sums can be raised;There is no interest to pay|Owners lose some control;Dividends must be paid;It is costly and time-consuming to arrange
using crowdfunding|Money comes from many people;There may be no interest to pay;It tests demand for a new product|The target might not be reached;It takes time to promote;Rewards or shares must be given to backers
leasing equipment|There is no large upfront cost;Maintenance is often included;Equipment can be upgraded|The business never owns the asset;It costs more over time;The business is locked into a contract
`),
u6:L(`
operating ethically|It improves the business's reputation;It attracts ethical customers;Staff are more motivated|Costs are higher;Short-term profit may fall;Prices may need to rise
globalisation|The business can access larger markets;Production abroad can be cheaper;There is a wider choice of suppliers|There is more competition;Exchange rate changes create risk;There may be criticism over wages abroad
a strong pound|Imports are cheaper;Raw materials from abroad cost less;Overseas holidays are cheaper|Exports become more expensive;It is harder to sell abroad;UK exporters may lose competitiveness
a weak pound|Exports are cheaper for overseas customers;It can boost overseas sales;Tourists find the UK cheaper|Imports are more expensive;Imported raw materials cost more;It can contribute to inflation
`)};

/* ---------- SCENARIO CLUES ({P} = person, {B} = business) ---------- */
const CLD={
u1:[
['type of business ownership',{
'Sole trader':['{P} owns {B} alone and keeps all of the profit.','{P} is the only owner of {B} and is personally responsible for all its debts.','{P} started {B} with personal savings and makes every decision alone.'],
'Partnership':['{P} and a friend jointly own {B} and share the profits.','{B} is run by two owners who each bring skills and money and share decisions.','Three people own {B} and share the responsibilities, and each could lose personal belongings if it fails.'],
'Private limited company (Ltd)':['{P} is a shareholder in {B}, a company whose shares cannot be bought on the stock exchange.','{B} has “Ltd” after its name and its owners cannot lose their personal belongings if it fails.','{B} sold shares only to {P}\'s family and friends.'],
'Public limited company (PLC)':['Anyone can buy shares in {B} on the stock exchange.','{B} raised millions of pounds by selling shares to the public and is worried about being taken over.','{P} bought shares in {B} on the stock market, a company that must publish its accounts.'],
'Franchise':['{P} pays a fee to use a famous brand name and follow its methods to run {B}.','{P} runs {B} using another company\'s brand and receives training in return for paying a share of sales.']}],
['business aim',{
'Survival':['{B} has just opened and its main aim is to stay in business for its first year.','{P} only wants {B} to cover its costs while it is new.'],
'Profit maximisation':['{B} wants to make as much profit as possible this year.','{P} is cutting costs and raising prices at {B} to earn the highest profit possible.'],
'Growth':['{B} wants to open ten new branches over the next three years.','{P} wants {B} to become larger by selling more and expanding.'],
'Market share':['{B} wants to increase its percentage of total market sales from 10% to 15%.','{P} sets a target for {B} to sell more than any of its rivals in the area.'],
'A social or ethical aim':['{B} reinvests its profits to help local homeless people.','{P} runs {B} to reduce plastic waste rather than to maximise profit.']}],
['type of business growth',{
'Internal (organic) growth':['{B} grows by opening a new store funded by its own profits.','{B} launches a new product range to increase its sales.'],
'Merger':['{B} and a rival agree to join together to form one new company.','{P} agrees with the owner of a rival firm to combine {B} with it as equals.'],
'Takeover':['{B} buys over half of a rival\'s shares and takes control of it.','A large firm buys {B} and takes over its running.'],
'Diversification':['{B} starts selling a completely new range of products in new markets to spread its risk.','{P} expands {B} into a different type of product in a new country.']}],
['business sector',{
'Primary sector':['{P} works for a company that mines coal.','{P} grows wheat on a farm.'],
'Secondary sector':['{P} works in a factory that makes furniture from timber.','{P} manufactures cars from steel and plastic.'],
'Tertiary sector':['{P} provides haircuts in {B}.','{P} works in a bank offering loans to customers.'],
'Public sector':['{P} works for an organisation owned and controlled by the government.','{P} is employed by a state-owned service paid for by taxes.']}]],
u2:[
['promotion method',{
'Advertising':['{P} pays for a poster campaign to raise awareness of {B}.','{B} pays for a slot on local radio to promote a new product.'],
'Sales promotion':['{B} offers a free gift with every purchase this month.','{B} gives customers a coupon for money off their next visit.'],
'Sponsorship':['{B} pays to have its name on the local football team\'s shirts.','{P} pays for {B}\'s name to appear on a charity run.'],
'Public relations (PR)':['{B} holds a launch event so a local newspaper writes about it for free.','{P} sends press releases about {B}\'s charity work to journalists.'],
'Direct marketing':['{B} emails special offers directly to the customers on its mailing list.','{P} posts leaflets about {B} through local letterboxes.']}],
['pricing strategy',{
'Penetration pricing':['{B} launches a new product at a very low price to win customers quickly.','{P} sets a low introductory price at {B} to gain market share.'],
'Price skimming':['{B} launches a new gadget at a very high price, planning to cut it later.','{P} charges a high price for a brand new product at {B} to recover development costs.'],
'Cost-plus pricing':['{P} adds 30% to the cost of making each item to set the selling price at {B}.','{B} works out the cost of each product and adds a fixed percentage on top.'],
'Competitive pricing':['{B} sets its prices at the same level as its main rival.','{P} checks competitors\' prices and matches them at {B}.'],
'Promotional pricing':['{B} cuts prices by 20% for one weekend only.','{B} runs a “buy one, get one free” offer for a short time.']}],
['stage of the product life cycle',{
'Introduction stage':['Sales of {B}\'s new product are low and the business spends heavily on advertising.','{B} has just launched a product and few customers know about it.'],
'Growth stage':['Sales of {B}\'s product are rising quickly and competitors are entering the market.','{B} is selling more every month and profits are starting to rise.'],
'Maturity stage':['Sales of {B}\'s product have levelled off.','{B}\'s product is well known and sales are no longer rising.'],
'Decline stage':['Sales of {B}\'s product are falling as customers switch to newer alternatives.','{P} is considering withdrawing a product from {B} as sales keep dropping.']}],
['basis of market segmentation',{
'Age':['{B} targets teenagers aged 13 to 17.','{B} aims its products at retired customers over 65.'],
'Gender':['{B} markets a range of clothes specifically at women.','{B} sells a grooming range aimed at men.'],
'Income':['{B} targets customers on high salaries with luxury products.','{B} offers budget products for people on low incomes.'],
'Location':['{B} advertises only to people living in Leeds.','{B} targets customers who live within five miles of its shop.'],
'Lifestyle':['{B} targets keen runners and gym fans.','{B} aims its products at busy young professionals who enjoy eating out.']}]],
u3:[
['motivation method',{
'Piece rate':['{P} is paid £2 for every item made at {B}.','{P} earns more money the more items they produce.'],
'Commission':['{P} earns 5% of everything they sell at {B}.','{P} receives a percentage of the value of the sales they make.'],
'Bonus':['{P} receives an extra £500 for hitting a yearly target at {B}.','{P} gets an extra payment at Christmas for good performance.'],
'Profit sharing':['Staff at {B} receive a share of the business\'s annual profit.','Employees at {B} are given part of the profit made in a successful year.'],
'Fringe benefits':['{B} gives employees free gym membership and a company car.','{P} receives a staff discount and free meals at {B}.'],
'Job rotation':['Staff at {B} swap between the till, shop floor and stockroom each week.','{P} moves between different tasks at {B} to avoid boredom.'],
'Job enrichment':['{P} is given more responsibility, including ordering stock, at {B}.','{P} is given more challenging and varied tasks at {B}.']}],
['type of training',{
'Induction training':['New starter {P} is shown round {B} and meets colleagues on day one.','{P} learns the rules and health and safety procedures on their first day at {B}.'],
'On-the-job training':['{P} learns to use the till by working alongside an experienced colleague at {B}.','{P} is trained by a supervisor while doing their normal job at {B}.'],
'Off-the-job training':['{B} sends {P} to a college course one day a week.','{P} attends a training day at an outside training centre.'],
'Apprenticeship':['{P} works at {B} while studying towards a qualification and earning a wage.','{P} combines paid work at {B} with training to gain a recognised qualification.']}],
['organisational structure feature',{
'Tall structure':['{B} has many layers of management and narrow spans of control.','Instructions at {B} take a long time to pass through all the levels of management.'],
'Flat structure':['{B} has only two layers of management so messages pass quickly to staff.','{B} has few levels of hierarchy and each manager supervises many staff.'],
'Delegation':['The manager of {B} passes authority for ordering stock to {P}.','{P} is given the authority to decide the staff rota by their manager.'],
'Span of control':['A manager at {B} directly supervises eight staff.','The number of employees reporting directly to {P} at {B} is twelve.'],
'Chain of command':['Instructions at {B} pass from the owner down through supervisors to shop-floor staff.','At {B}, {P} reports to a supervisor, who reports to a manager, who reports to the director.']}],
['type of employment contract',{
'Full-time employee':['{P} works 40 hours a week at {B} on a permanent contract.','{P} works the standard full working week at {B}.'],
'Part-time employee':['{P} works 15 hours a week at {B}.','{P} works only two days a week at {B}.'],
'Zero-hours contract':['{P} has no guaranteed hours and only works when {B} calls them in.','{B} can choose not to offer {P} any work in a quiet week.'],
'Temporary contract':['{P} is employed by {B} for six months to cover the busy season.','{P} has a contract with {B} that ends after a fixed period.']}]],
u4:[
['approach to operations',{
'Job production':['{B} makes a single bespoke item to a customer\'s exact design.','A shipbuilder makes one unique ship to order.'],
'Batch production':['{B} bakes 200 identical loaves at a time before switching to a different recipe.','A factory makes a group of blue t-shirts, then a group of red ones.'],
'Flow production':['A car factory produces identical cars continuously on a moving assembly line.','{B} makes thousands of identical products non-stop on a production line.'],
'Outsourcing':['{B} pays another company to handle all of its deliveries.','{P} pays an outside firm to carry out part of the business\'s operations.'],
'Just-in-time (JIT)':['{B} receives deliveries of ingredients just as it needs them so very little is stored.','{P} orders stock so that it arrives exactly when it is needed.']}],
['approach to quality',{
'Quality control':['{B} inspects the finished products at the end of the line and rejects faulty ones.','{P} checks completed items for faults before they are sent to customers.'],
'Quality assurance':['{B} checks quality at every stage, from buying materials to packing.','{P} builds quality checks into each step of production to prevent faults.'],
'Total quality management (TQM)':['Every employee at {B} is responsible for quality.','{B} trains all of its staff to look for ways to improve quality in every department.'],
'Kitemark':['A product at {B} displays a British quality and safety symbol.','{B} proves that its goods meet recognised standards by displaying a quality mark.']}],
['legal requirement under the Consumer Rights Act',{
'Satisfactory quality':['A customer\'s new toaster stops working after one day.','A new phone bought from {B} has a cracked screen and faulty battery.'],
'Fit for purpose':['A waterproof coat sold for hiking lets in water.','A kettle sold for boiling water fails to heat up.'],
'As described':['A sofa advertised as leather turns out to be plastic.','A shirt sold as 100% cotton is actually made of polyester.'],
'Services with reasonable care and skill':['A plumber damages the customer\'s pipes while fixing them.','A decorator paints a room badly and leaves paint on the carpet.']}],
['stock or supplier term',{
'Buffer stock':['{B} always keeps 100 units in reserve in case of sudden demand.','{B} holds a minimum level of stock so it never runs out.'],
'Lead time':['{B} orders flour on Monday and it arrives on Thursday, a delay of 3 days.','{P} waits two weeks between placing an order and receiving it.'],
'Trade credit':['{B} receives goods now but pays the supplier in 30 days.','{P} buys stock today and has a month to pay the supplier.'],
'Procurement':['{P} negotiates prices and chooses which suppliers {B} will buy from.','{B} has a manager who buys all the goods and services the business needs.']}],
['location factor',{
'Proximity to market':['{B} opens beside a busy shopping centre to be close to customers.','{P} sets up {B} in the centre of town where there are lots of potential customers.'],
'Proximity to raw materials':['A quarry opens right next to the rock it extracts.','A sawmill is built beside a forest.'],
'Labour supply':['A call centre opens in a town with many skilled, available workers.','{B} chooses a city with many college graduates ready to work.'],
'Costs of premises':['{B} moves to an area where the rent is much lower.','{P} chooses a cheaper unit to reduce fixed costs.'],
'Infrastructure':['A factory is built near a motorway and port for easy transport.','{B} locates where there are good road, rail and broadband links.']}]]};

const G={
u1:[()=>{const p=ri(2,60),n=ri(20,900);return[`${cap(pk(BZ))} sells ${n} items at £${p} each. What is its revenue?`,p*n,[p+n,p*n+n,p*n-p],gbp,`Revenue = price × quantity = ${p} × ${n} = £${p*n}.`]},
 ()=>{const F_=ri(5,30)*500,V=ri(5,30)*500,Rv=F_+V+ri(2,40)*500;return[`A business has revenue of £${nu(Rv)}, fixed costs of £${nu(F_)} and variable costs of £${nu(V)}. What is its profit?`,Rv-F_-V,[Rv-F_,Rv-V,F_+V],gbp,`Profit = revenue − total costs = ${Rv} − (${F_} + ${V}) = £${Rv-F_-V}.`]},
 ()=>{const fc=ri(2,40)*100,vc=ri(1,20),n=ri(10,300);return[`${cap(pk(BZ))} has fixed costs of £${nu(fc)} and variable costs of £${vc} per unit. What are the total costs of making ${n} units?`,fc+vc*n,[vc*n,fc*n+vc,(fc+vc)*n],gbp,`Total costs = fixed costs + (variable cost per unit × units) = ${fc} + (${vc} × ${n}) = £${fc+vc*n}.`]},
 ()=>{const rv=pk([20000,25000,40000,50000,60000,80000,100000]),p=ri(2,20)*2,pf=rv*p/100;return[`A business makes a net profit of £${nu(pf)} on revenue of £${nu(rv)}. What is its net profit margin?`,p,[100-p,p*2,rv/pf],pc,`Net profit margin = (net profit ÷ revenue) × 100 = (${pf} ÷ ${rv}) × 100 = ${p}%.`]},
 ()=>{const s=pk([1000,2000,5000,10000,20000]),d=ri(1,30),T=s*d/100;return[`A company pays total dividends of £${nu(T)} to holders of ${nu(s)} shares. What is the dividend per share?`,d,[T/s,d*10,s/T],pe,`Dividend per share = total dividend ÷ number of shares = £${T} ÷ ${s} = ${d}p.`]}],
u2:[()=>{const m=pk([20000,40000,50000,80000,100000,250000]),p=ri(2,30),s=m*p/100;return[`A business sells £${nu(s)} of goods in a market worth £${nu(m)}. What is its market share?`,p,[100-p,p*2,m/s],pc,`Market share = (business sales ÷ total market sales) × 100 = (${s} ÷ ${m}) × 100 = ${p}%.`]},
 ()=>{const o=pk([100,200,400,500,800,1000,2000]),p=ri(1,12)*5,up=R()<.6,nw=o*(1+(up?1:-1)*p/100);return[`Monthly sales ${up?'rose':'fell'} from £${nu(o)} to £${nu(nw)}. What was the percentage ${up?'increase':'decrease'}?`,p,[Math.abs(nw-o),p+5,Math.abs(nw-o)/nw*100],pc,`% change = (change ÷ original) × 100 = (${Math.abs(nw-o)} ÷ ${o}) × 100 = ${p}%.`]},
 ()=>{const a=[ri(1,10),ri(1,10),ri(1,10),ri(1,10),ri(1,10)],s=a.reduce((x,y)=>x+y,0);return[`Five customers rate a new product out of 10: ${a.join(', ')}. What is the mean rating?`,s/5,[s,s/4,s/5+1],nu,`Mean = total ÷ number of responses = ${s} ÷ 5 = ${r1(s/5)}.`]},
 ()=>{const c=ri(1,40)*10,m=pk([10,20,25,50,100]);return[`A product costs £${c} to make. A business uses cost-plus pricing with a ${m}% mark-up. What is the selling price?`,c*(1+m/100),[c*m/100,c+m,c*(1+m/10)],gbp,`Selling price = cost + mark-up = ${c} + (${c} × ${m}%) = £${c*(1+m/100)}.`]},
 ()=>{const p=ri(2,40)*10,d=pk([10,15,20,25,30,40,50]);return[`A £${p} item is on promotional pricing with ${d}% off. What is the sale price?`,p*(1-d/100),[p*d/100,p-d,p*(1+d/100)],gbp,`Sale price = ${p} − (${p} × ${d}%) = £${r1(p*(1-d/100))}.`]},
 ()=>{const n=pk([50,100,200,250,400,500]),p=ri(2,18)*5,x=n*p/100;return[`In a survey of ${n} customers, ${x} said they would buy a new product. What percentage is this?`,p,[x,100-p,n/x],pc,`Percentage = (${x} ÷ ${n}) × 100 = ${p}%.`]}],
u3:[()=>{const a=pk([20,40,50,80,100,200,250]),p=ri(2,25),l=a*p/100;return[`A business averages ${a} employees and ${l} left during the year. What is the labour turnover?`,p,[a/l,p+4,l],pc,`Labour turnover = (leavers ÷ average employees) × 100 = (${l} ÷ ${a}) × 100 = ${p}%.`]},
 ()=>{const n=pk([20,25,40,50,100]),d=pk([20,22,250/10]),tot=n*d,p=ri(2,12),ab=tot*p/100;return[`A firm has ${n} staff who should each work ${d} days. Total days lost to absence were ${ab}. What is the absenteeism rate?`,p,[ab/n,p*2,100-p],pc,`Absenteeism = (days absent ÷ total days possible) × 100 = (${ab} ÷ ${tot}) × 100 = ${p}%.`]},
 ()=>{const h=ri(10,45),r=ri(6,25);return[`An employee works ${h} hours at £${r} per hour. What is their weekly wage?`,h*r,[h+r,h*r+h,h*r-r],gbp,`Wage = hours × hourly rate = ${h} × ${r} = £${h*r}.`]},
 ()=>{const b=ri(10,40)*100,s=ri(5,40)*1000,c=pk([1,2,3,5,10]);return[`A salesperson earns a basic £${nu(b)} plus ${c}% commission. They sell £${nu(s)} of goods. What is their total pay?`,b+s*c/100,[s*c/100,b+c,b*c/100+s],gbp,`Total pay = basic + commission = ${b} + (${s} × ${c}%) = £${b+s*c/100}.`]},
 ()=>{const p=ri(10,80),d=ri(2,6),r=pk([0.5,1,1.5,2,2.5,3]);return[`A factory worker is paid piece rate of £${r} per item. They make ${p} items a day for ${d} days. What do they earn?`,p*d*r,[p*r,p*d+r,p*d],gbp,`Pay = items × rate = ${p} × ${d} × ${r} = £${p*d*r}.`]},
 ()=>{const m=ri(2,10),k=ri(3,12);return[`A business has ${m*k} employees reporting equally to ${m} managers. What is each manager's span of control?`,k,[m,m*k,k+m],nu,`Span of control = employees ÷ managers = ${m*k} ÷ ${m} = ${k}.`]}],
u4:[()=>{const w=ri(2,40),k=ri(5,60);return[`${cap(pk(BZ))} has ${w} workers who produce ${w*k} units in a day. What is the productivity per worker?`,k,[w*k,w+k,k*2],nu,`Productivity = output ÷ number of workers = ${w*k} ÷ ${w} = ${k} units per worker.`]},
 ()=>{const u=ri(10,500),c=ri(2,40),T=u*c;return[`It costs £${nu(T)} to make ${u} units. What is the cost per unit?`,c,[T-u,u/c,c+u/10],gbp,`Unit cost = total cost ÷ units = ${T} ÷ ${u} = £${c}.`]},
 ()=>{const cp=pk([200,400,500,800,1000,2000]),p=ri(2,19)*5,o=cp*p/100;return[`A factory can make ${nu(cp)} units but made ${nu(o)}. What is its capacity utilisation?`,p,[100-p,cp/o,p+10],pc,`Capacity utilisation = (actual output ÷ maximum capacity) × 100 = (${o} ÷ ${cp}) × 100 = ${p}%.`]},
 ()=>{const t=pk([100,200,250,400,500,1000]),p=ri(1,10),d=t*p/100;return[`A quality check finds ${d} faulty items out of ${t} produced. What is the defect rate?`,p,[d,100-p,t/d],pc,`Defect rate = (faulty ÷ total produced) × 100 = (${d} ÷ ${t}) × 100 = ${p}%.`]},
 ()=>{const n=ri(10,500),p=ri(2,30),d=ri(5,60)*5;return[`A business orders ${n} units at £${p} each plus £${d} delivery. What is the total cost of the order?`,n*p+d,[n*p,n+p+d,(n+d)*p],gbp,`Total = (${n} × ${p}) + ${d} = £${n*p+d}.`]},
 ()=>{const o=pk([10,20,25,40,50]),p=ri(1,10)*5,n=o*(1+p/100);return[`Productivity rises from ${o} to ${r1(n)} units per worker per day. What is the percentage increase?`,p,[n-o,p+5,(n-o)/n*100],pc,`% increase = (${r1(n-o)} ÷ ${o}) × 100 = ${p}%.`]}],
u5:[()=>{const fc=ri(2,40)*1000,p=ri(5,50),v=ri(1,p-1),b=Math.ceil(fc/(p-v));return[`Fixed costs are £${nu(fc)}, price is £${p} and variable cost is £${v} per unit. What is the break-even output (rounded up)?`,b,[Math.ceil(fc/p),Math.ceil(fc/v),Math.ceil(fc/(p+v))],nu,`Break-even = fixed costs ÷ (price − variable cost per unit) = ${fc} ÷ ${p-v} = ${b} units.`]},
 ()=>{const i=ri(2,30)*1000,y=ri(2,5),pr=ri(2,40)*100*y,a=pr/y/i*100;return[`A £${nu(i)} investment returns total profit of £${nu(pr)} over ${y} years. What is the ARR?`,a,[pr/i*100,a*y,i/pr],pc,`ARR = (total profit ÷ years ÷ investment) × 100 = (${pr} ÷ ${y} ÷ ${i}) × 100 = ${r1(a)}%.`]},
 ()=>{const o=ri(1,20)*500,i=ri(1,20)*500,x=ri(1,20)*500;return[`A business opens the month with £${nu(o)}, has cash inflows of £${nu(i)} and outflows of £${nu(x)}. What is the closing balance?`,o+i-x,[o+i+x,i-x,o-i+x],gbp,`Closing balance = opening + inflows − outflows = ${o} + ${i} − ${x} = £${o+i-x}.`]},
 ()=>{const b=ri(100,900),a=b+ri(1,50)*10;return[`A business breaks even at ${b} units and sells ${a} units. What is its margin of safety?`,a-b,[a+b,b,a],nu,`Margin of safety = actual output − break-even output = ${a} − ${b} = ${a-b} units.`]},
 ()=>{const rv=ri(20,90)*1000,cs=ri(5,19)*1000,ex=ri(1,9)*1000;return[`Revenue is £${nu(rv)}, cost of sales £${nu(cs)} and expenses £${nu(ex)}. What is the net profit?`,rv-cs-ex,[rv-cs,rv-ex,cs+ex],gbp,`Gross profit = ${rv} − ${cs} = ${rv-cs}. Net profit = ${rv-cs} − ${ex} = £${rv-cs-ex}.`]}]};


/* ---------- QUESTION BUILDERS ---------- */
const mc=(u,q,c,w,e)=>{const o=sh([c,...w]);return{u,q,o,a:o.indexOf(c),e}};
const num=(u,q,ans,w,fmt,e)=>{ans=r1(ans);const ws=[];for(const x of w){const y=r1(x);if(y!==ans&&!ws.includes(y))ws.push(y)}
 const st=Math.max(1,Math.round(Math.abs(ans)*.1));let g=0;while(ws.length<3&&g++<60){const y=r1(ans+ri(-9,9)*st);if(y!==ans&&y>=0&&!ws.includes(y))ws.push(y)}
 const o=sh([ans,...ws.slice(0,3)]);return{u,q,o:o.map(fmt),a:o.indexOf(ans),e}};
function termQs(u){const f=F[u],out=[];
 f.forEach(([t,d],i)=>{const ot=f.filter((_,j)=>j!==i);
  out.push(mc(u,`Which ONE of the following is the correct definition of ${t}?`,d,sh(ot).slice(0,3).map(x=>x[1]),`${t}: ${d}.`));
  out.push(mc(u,`“${d}.”||Which ONE of the following terms matches this definition?`,t,sh(ot).slice(0,3).map(x=>x[0]),`${t}: ${d}.`))});return out}
function pcQs(u){const out=[];const A=PCD[u];if(!A)return out;
 const P=A.map(([c,a,d])=>({c,a:a.split(';'),d:d.split(';')}));
 P.forEach((p,i)=>{const oth=P.filter((_,j)=>j!==i);
  const ex=(s,arr)=>arr.join('; ');
  p.a.forEach((a,k)=>{const x=pk(oth);
   out.push(mc(u,['Which ONE of the following is an advantage of ','A business is considering ','Which ONE of these is a benefit of '][k%3]+(k%3===1?p.c+'. Which ONE of these is a benefit?':p.c+'?'),a,[...sh(p.d).slice(0,2),pk(x.d)],`An advantage of ${p.c}: ${a}. The other options are drawbacks (${ex(0,p.d)}).`))});
  p.d.forEach((d,k)=>{const x=pk(oth);
   out.push(mc(u,['Which ONE of the following is a disadvantage of ','A business is considering ','Which ONE of these is a drawback of '][k%3]+(k%3===1?p.c+'. Which ONE of these is a drawback?':p.c+'?'),d,[...sh(p.a).slice(0,2),pk(x.a)],`A disadvantage of ${p.c}: ${d}. The other options are benefits (${ex(0,p.a)}).`))});
  p.d.forEach(d=>out.push(mc(u,`Which ONE of the following is NOT an advantage of ${p.c}?`,d,p.a,`${cap(d)} is a drawback, not an advantage, of ${p.c}. Advantages: ${p.a.join('; ')}.`)));
  p.a.forEach(a=>out.push(mc(u,`Which ONE of the following is NOT a disadvantage of ${p.c}?`,a,p.d,`${cap(a)} is a benefit, not a disadvantage, of ${p.c}. Disadvantages: ${p.d.join('; ')}.`)))});
 return out}
function defOf(u,cat){const t=cat.toLowerCase();const m=F[u].find(([x])=>x.toLowerCase()===t);return m?`${m[0]}: ${m[1]}.`:`This describes ${cat}.`}
function clueQs(u){const out=[],seen=new Set();(CLD[u]||[]).forEach(([noun,cats])=>{const names=Object.keys(cats);
 names.forEach(cat=>cats[cat].forEach(cl=>{for(let v=0;v<4;v++){const s=cap(cl.replace(/\{P\}/g,pk(NM)).replace(/\{B\}/g,pk(BZ)));if(seen.has(s))continue;seen.add(s);
  const w=sh(names.filter(n=>n!==cat)).slice(0,3);out.push(mc(u,`${s}||Which ONE ${noun} does this describe?`,cat,w,defOf(u,cat)))}}))});return out}
function calcQs(u,gens,per){const out=[],seen=new Set();
 gens.forEach(g=>{let n=0,tries=0;while(n<per&&tries++<600){const r=g();if(seen.has(r[0]))continue;seen.add(r[0]);out.push(num(u,...r));n++}});return out}

const Q={};
Object.keys(UN).forEach(u=>{const seen=new Set();Q[u]=[...termQs(u),...pcQs(u),...clueQs(u),...(G[u]?calcQs(u,G[u],u==='u5'?10:8):[])].filter(q=>{const k=q.q+'|'+q.o[q.a];if(seen.has(k))return false;seen.add(k);return true})});
const TOTAL=Object.values(Q).reduce((s,a)=>s+a.length,0);

/* ---------- NAV / TABS ---------- */
const NAV=[['dashboard','📊','Dashboard'],['notes','📚','Revision Notes'],['exam','✍️','3 · 7 · 9 Mark Guide'],['formulas','🧮','Formula Master'],['flashcards','⚡','Flashcards'],['quiz','🎯','Exam-Style Quiz']];
const TITLES=Object.fromEntries(NAV.map(n=>[n[0],n[2]]));
document.getElementById('sidenav').innerHTML=NAV.map(n=>`<button onclick="switchTab('${n[0]}')" data-target="${n[0]}" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/10 ${n[0]==='dashboard'?'is-active':''}">${n[1]} ${n[2]}</button>`).join('');
document.getElementById('mobnav').innerHTML=NAV.map(n=>`<button onclick="switchTab('${n[0]}')" data-target="${n[0]}" class="nav-btn shrink-0 px-3 py-2 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 ${n[0]==='dashboard'?'is-active':''}">${n[1]} ${n[2].replace(' Mark Guide',' Marks')}</button>`).join('');
document.getElementById('hdrq').textContent=TOTAL.toLocaleString()+' questions';
function switchTab(t){qs.active=false;document.querySelectorAll('.tab-content').forEach(e=>e.classList.toggle('active',e.id===t));document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('is-active',b.dataset.target===t));document.getElementById('page-title').textContent=TITLES[t];document.querySelector('main').scrollTo(0,0);if(t==='dashboard')renderDash();if(t==='subjects')sjDraw();if(t==='quiz'&&!qs.list.length)qSetup()}
function switchUnit(u){document.querySelectorAll('.unit-panel').forEach(e=>e.classList.toggle('hidden',e.id!==u));document.querySelectorAll('.unit-tab').forEach(b=>b.classList.toggle('on',b.dataset.u===u))}
document.getElementById('unittabs').innerHTML=Object.keys(UN).map((u,i)=>`<button onclick="switchUnit('${u}')" data-u="${u}" class="pill unit-tab ${i?'':'on'}">${u.slice(1)}. ${UN[u]}</button>`).join('');
function switchX(x){document.querySelectorAll('.xpanel').forEach(e=>e.classList.toggle('hidden',e.id!==x));document.querySelectorAll('.xtab').forEach(b=>b.classList.toggle('on',b.dataset.x===x))}
document.getElementById('xtabs').innerHTML=[['x3','3 marks'],['x7','7 marks'],['x9','9 marks'],['xcw','Command words'],['xplan','Plan it: practice']].map((x,i)=>`<button onclick="switchX('${x[0]}')" data-x="${x[0]}" class="pill xtab ${i?'':'on'}">${x[1]}</button>`).join('');

/* ---------- PROGRESS ---------- */
const PK='bm_prog3';
const loadP=()=>{try{return JSON.parse(localStorage.getItem(PK))||{}}catch(e){return{}}};
const saveP=p=>{try{localStorage.setItem(PK,JSON.stringify(p))}catch(e){}};

/* ---------- DASHBOARD ---------- */
function renderDash(){const P=loadP();
 const cards=Object.keys(UN).map(u=>{const p=P[u]||{att:0,cor:0,best:null},acc=p.att?Math.round(p.cor/p.att*100):0;
  return`<div class="card !p-5 flex flex-col gap-3"><div class="flex items-center gap-3"><div class="text-2xl w-11 h-11 rounded-xl bg-indigo-50 grid place-items-center">${ICON[u]}</div><div><div class="font-bold">${u.slice(1)}. ${UN[u]}</div><div class="text-xs text-slate-500">${Q[u].length} questions${p.best!=null?` · best ${p.best}%`:''}</div></div></div>
  <div><div class="flex justify-between text-xs text-slate-500 mb-1"><span>Accuracy</span><span>${p.att?acc+'%':'not started'}</span></div><div class="bar"><i style="width:${acc}%"></i></div></div>
  <div class="flex gap-2"><button class="btn btn-s !py-2 flex-1 justify-center" onclick="goNotes('${u}')">Notes</button><button class="btn btn-p !py-2 flex-1 justify-center" onclick="goQuiz('${u}')">Quiz</button></div></div>`}).join('');
 document.getElementById('dashboard').innerHTML=`
 <div class="rounded-3xl p-8 md:p-10 text-white shadow-lg relative overflow-hidden" style="background:linear-gradient(120deg,#4338ca,#7c3aed 60%,#c026d3)">
  <div class="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-white/10"></div>
  <h3 class="text-3xl md:text-4xl font-extrabold mb-3 relative">Ready for your Year 11 Business mocks? 🚀</h3>
  <p class="text-indigo-100 max-w-2xl relative">Exam-style multiple choice, scenario questions, revision notes and step-by-step guides to 3, 7 and 9 mark answers, all built around OCR GCSE Business (J204).</p>
  <div class="flex flex-wrap gap-3 mt-6 relative"><button class="btn bg-white text-indigo-700" onclick="goQuiz('all')">Start a mixed quiz →</button><button class="btn bg-white/15 text-white" onclick="switchTab('exam')">3·7·9 mark guide</button></div></div>
 <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  ${[[TOTAL.toLocaleString(),'exam-style questions'],['7','units covered'],['15','key formulas'],['3 · 7 · 9','mark guides with model answers']].map(s=>`<div class="card !p-5"><div class="text-2xl font-extrabold text-indigo-600">${s[0]}</div><div class="text-xs text-slate-500 mt-1">${s[1]}</div></div>`).join('')}</div>
 <div><h4 class="text-lg font-extrabold mb-4">Your topics</h4><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">${cards}</div></div>
 <div class="grid md:grid-cols-2 gap-5">
  <div class="card"><h4 class="font-extrabold mb-3">Exam structure (J204)</h4><div class="space-y-3 text-sm"><div class="p-3 rounded-xl bg-slate-50"><b>Paper 1:</b> Business activity, marketing and people<br><span class="text-slate-500">1 h 30 · 80 marks · 50% of GCSE</span></div><div class="p-3 rounded-xl bg-slate-50"><b>Paper 2:</b> Operations, finance and influences on business<br><span class="text-slate-500">1 h 30 · 80 marks · 50% of GCSE · includes the synoptic 9-marker</span></div></div></div>
  <div class="card"><h4 class="font-extrabold mb-3">A smart 3-step revision plan</h4>
   <div class="step"><b class="n">1</b><span><b>Learn</b> the notes and flashcards for one unit.</span></div>
   <div class="step"><b class="n">2</b><span><b>Test</b> yourself in Practice mode, then try Exam mode (no hints until the end).</span></div>
   <div class="step"><b class="n">3</b><span><b>Write</b> a 3, 7 or 9 marker from “Plan it” and check it against the checklist.</span></div></div></div>`}
function goQuiz(u){qs.unit=u;qs.list=[];switchTab('quiz');qSetup()}
function goNotes(u){switchTab('notes');switchUnit(u)}

/* ---------- PLAN IT ---------- */
const PLAN=[
[1,7,'A sole trader is thinking about taking on a partner. Discuss whether they should.',['For: shared workload and skills, extra capital','Against: profits shared, possible disagreements, still unlimited liability','Judgement: depends on how much finance and expertise the business needs to grow']],
[2,9,'A business is launching a new smartphone. Evaluate whether it should use price skimming or penetration pricing.',['Skimming: high profit per unit, recovers development costs, but fewer buyers and rivals can undercut','Penetration: fast market share, but low margins and hard to raise price later','Judgement: weigh product uniqueness, competitors and the business aim (profit vs market share)']],
[2,3,'Analyse one benefit to a business of segmenting its market.',['K: dividing customers into groups with similar needs','A: e.g. a gym targets students with a cheaper membership','AN: so adverts are better targeted, boosting sales and cutting wasted advertising']],
[3,7,'A growing business has a tall structure. Discuss whether it should move to a flat structure.',['For: faster communication, lower management costs, more empowered staff','Against: wide span of control, fewer promotion routes, less supervision','Judgement: link to size and type of work, and how skilled the staff are']],
[3,3,'Analyse one benefit to a business of using on-the-job training.',['K: learning while doing the real job with a colleague','A: e.g. a new waiter is shown the till by an experienced waiter','AN: so they become productive quickly and the business saves training costs']],
[4,9,'A bakery uses batch production. Evaluate whether it should switch to flow production.',['Flow: lower unit cost, high output, but huge set-up costs and inflexible','Batch: flexible and lower set-up, but higher unit cost and time lost','Judgement: depends on demand levels, finance available and product variety']],
[4,3,'Analyse one way that good customer service could benefit a business.',['K: helping customers before, during and after a sale','A: e.g. a shop offering easy refunds on faulty items','AN: builds loyalty and reputation, leading to repeat sales and higher revenue']],
[5,3,'Recommend whether a new business should use an overdraft or a bank loan to buy £10,000 of equipment.',['Decision first (e.g. bank loan)','Justify: overdraft is short-term with high interest, loan has fixed repayments over a long period','Consequence: predictable costs, equipment bought now, supports growth']],
[6,7,'Discuss the effect of a rise in interest rates on a business that has a large bank loan.',['Costs: loan repayments rise, so profit falls','Demand: customers borrow and spend less, so sales may fall','Judgement: the bigger the loan, the greater the impact; some firms may cut prices or delay investment']],
[7,9,'A manufacturer wants to improve product quality. Evaluate the impact on its operations, finance and marketing functions.',['Operations: TQM, training, slower production in the short term','Finance: higher costs now, but less waste and fewer returns in the long term','Marketing: stronger reputation allows higher prices','Judgement: weigh short-term cost against long-term benefits for the business']]];
let planF=0;
function renderPlan(){document.getElementById('planchips').innerHTML=[0,3,7,9].map(m=>`<button class="pill ${planF===m?'on':''}" onclick="planF=${m};renderPlan()">${m?m+' marks':'All'}</button>`).join('');
 document.getElementById('plangrid').innerHTML=PLAN.filter(p=>!planF||p[1]===planF).map(p=>`<div class="card"><div class="flex gap-2 mb-2"><span class="tag">${p[1]} marks</span><span class="tag">${p[0]}. ${UN['u'+p[0]]}</span><span class="tag">⏱ ${p[1]} min</span></div><p class="font-semibold text-sm mb-3">${p[2]}</p><details><summary class="text-indigo-600 text-sm">Reveal the plan</summary><ul class="list-disc pl-5 mt-2 text-sm text-slate-600 space-y-1.5">${p[3].map(x=>`<li>${x}</li>`).join('')}</ul></details></div>`).join('')}
renderPlan();

/* ---------- FORMULAS ---------- */
const FM=[
['Revenue','Price × Quantity sold','100 units × £8 = £800'],
['Total costs','Fixed costs + Variable costs','£500 + (£3 × 100) = £800'],
['Profit','Revenue − Total costs','£1,200 − £800 = £400'],
['Gross profit','Revenue − Cost of sales','£5,000 − £3,000 = £2,000'],
['Net profit','Gross profit − Expenses','£2,000 − £1,200 = £800'],
['Net profit margin','(Net profit ÷ Revenue) × 100','(£800 ÷ £5,000) × 100 = 16%'],
['Break-even output','Fixed costs ÷ (Price − Variable cost per unit)','£6,000 ÷ (£10 − £4) = 1,000 units'],
['Margin of safety','Actual output − Break-even output','1,200 − 1,000 = 200 units'],
['Average rate of return (ARR)','(Total return − Investment) ÷ Years ÷ Investment × 100','(£30,000 − £20,000) ÷ 5 ÷ £20,000 × 100 = 10%'],
['Net cash flow & closing balance','Inflows − Outflows; Closing = Opening + Net cash flow','£3,000 − £2,000 = £1,000; £500 + £1,000 = £1,500'],
['Market share','(Business sales ÷ Total market sales) × 100','(£20,000 ÷ £100,000) × 100 = 20%'],
['% change','(Change ÷ Original) × 100','(£120 − £100) ÷ £100 × 100 = 20%'],
['Labour turnover','(Leavers ÷ Average employees) × 100','(5 ÷ 50) × 100 = 10%'],
['Productivity','Output ÷ Number of workers','500 units ÷ 10 workers = 50 per worker'],
['Capacity utilisation','(Actual output ÷ Maximum capacity) × 100','(750 ÷ 1,000) × 100 = 75%']];
document.getElementById('fgrid').innerHTML=FM.map((f,i)=>`<div class="card"><div class="text-[11px] font-bold tracking-wider text-slate-400 mb-1">${i<9?'KEY FORMULA '+(i+1):'EXTRA'}</div><h4 class="font-extrabold text-indigo-600 mb-2">${f[0]}</h4><div class="font-mono text-sm bg-indigo-50 text-indigo-900 rounded-lg p-3 mb-2">${f[1]}</div><div class="text-xs text-slate-500">Example: ${f[2]}</div></div>`).join('');

/* ---------- FLASHCARDS ---------- */
const fc={u:'u1',deck:[],i:0,flip:false};
function fcLoad(u){fc.u=u;fc.deck=u==='all'?Object.keys(F).flatMap(k=>F[k]):F[u].slice();fc.i=0;fc.flip=false;fcRender()}
function fcRender(){const d=fc.deck[fc.i];
 const tabs=['all',...Object.keys(UN)].map(k=>`<button onclick="fcLoad('${k}')" class="pill ${fc.u===k?'on':''}">${k==='all'?'All units':k.slice(1)+'. '+UN[k]}</button>`).join('');
 document.getElementById('fcroot').innerHTML=`<div class="flex flex-wrap gap-2 mb-6">${tabs}</div>
 <div onclick="fc.flip=!fc.flip;fcRender()" class="cursor-pointer card min-h-[300px] flex flex-col items-center justify-center text-center !p-8 max-w-2xl mx-auto select-none">
 <div class="text-[11px] font-bold tracking-widest ${fc.flip?'text-emerald-600':'text-indigo-500'} mb-4">${fc.flip?'DEFINITION':'TERM'} · TAP TO FLIP</div>
 <div class="${fc.flip?'text-lg text-slate-700':'text-3xl font-extrabold'}">${fc.flip?d[1]:d[0]}</div></div>
 <div class="flex items-center justify-center gap-3 mt-6"><button onclick="fcMove(-1)" class="btn btn-s">← Prev</button><span class="text-sm text-slate-500">${fc.i+1} / ${fc.deck.length}</span><button onclick="fcMove(1)" class="btn btn-p">Next →</button><button onclick="fc.deck=sh(fc.deck);fc.i=0;fc.flip=false;fcRender()" class="btn btn-s">🔀 Shuffle</button></div>`}
function fcMove(n){fc.i=(fc.i+n+fc.deck.length)%fc.deck.length;fc.flip=false;fcRender()}

/* ---------- QUIZ ---------- */
const qs={unit:'u1',len:20,mode:'practice',list:[],i:0,ans:[],t0:0,active:false,timer:null};
const fmtT=s=>Math.floor(s/60)+':'+String(s%60).padStart(2,'0');
const scn=q=>{const p=q.split('||');return p.length>1?`<div class="scn">${p[0]}</div><h3 class="text-lg font-bold mb-5">${p[1]}</h3>`:`<h3 class="text-lg font-bold mb-5">${q}</h3>`};
function qSetup(){clearInterval(qs.timer);qs.active=false;qs.list=[];const P=loadP();
 const ub=['all',...Object.keys(UN)].map(k=>{const n=k==='all'?TOTAL:Q[k].length,b=k==='all'?null:(P[k]||{}).best;return`<button onclick="qs.unit='${k}';qSetup()" class="text-left p-4 rounded-2xl border-2 ${qs.unit===k?'border-indigo-500 bg-indigo-50':'border-[var(--line)] bg-white'} transition hover:border-indigo-300"><div class="font-bold text-sm">${k==='all'?'🔀 Mixed: all units':ICON[k]+' '+k.slice(1)+'. '+UN[k]}</div><div class="text-xs text-slate-500 mt-1">${n} questions${b!=null?' · best '+b+'%':''}</div></button>`}).join('');
 const lb=[10,20,40,80].map(n=>`<button onclick="qs.len=${n};qSetup()" class="pill ${qs.len===n?'on':''}">${n} questions</button>`).join('');
 const md=[['practice','📖 Practice','Instant feedback and explanation after every question.'],['exam','⏱ Exam mode','Timed, no feedback until the end, just like a real paper (1 mark ≈ 1 minute).']].map(m=>`<button onclick="qs.mode='${m[0]}';qSetup()" class="text-left p-4 rounded-2xl border-2 flex-1 ${qs.mode===m[0]?'border-indigo-500 bg-indigo-50':'border-[var(--line)] bg-white'}"><div class="font-bold text-sm">${m[1]}</div><div class="text-xs text-slate-500 mt-1">${m[2]}</div></button>`).join('');
 document.getElementById('qroot').innerHTML=`<div class="card space-y-6 max-w-4xl mx-auto"><div><h3 class="font-extrabold text-lg mb-3">1. Choose a topic</h3><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">${ub}</div></div>
 <div><h3 class="font-extrabold text-lg mb-3">2. How many questions?</h3><div class="flex flex-wrap gap-2">${lb}</div></div>
 <div><h3 class="font-extrabold text-lg mb-3">3. Choose a mode</h3><div class="flex flex-col sm:flex-row gap-3">${md}</div></div>
 <button onclick="qStart()" class="btn btn-p !px-8 !py-3.5 text-base">Start quiz →</button></div>`}
function qStart(){const pool=qs.unit==='all'?Object.values(Q).flat():Q[qs.unit];qs.list=sh(pool).slice(0,qs.len);qs.i=0;qs.ans=[];qs.t0=Date.now();qs.active=true;clearInterval(qs.timer);
 qs.timer=setInterval(()=>{const e=document.getElementById('qtimer');if(e)e.textContent=fmtT(Math.round((Date.now()-qs.t0)/1000))},1000);qShow()}
function qShow(){const q=qs.list[qs.i],a=qs.ans[qs.i],ex=qs.mode==='exam',locked=!ex&&a!==undefined;
 const opts=q.o.map((o,k)=>{let c='';if(locked){c=k===q.a?'ok':k===a?'no':'dim'}else if(ex&&a===k)c='sel';
  return`<button ${locked?'disabled':''} onclick="qPick(${k})" class="opt ${c}"><span class="ltr">${'ABCD'[k]}</span><span>${o}</span></button>`}).join('');
 const last=qs.i+1===qs.list.length;
 const fb=locked?`<div class="mt-5 p-4 rounded-xl text-sm ${a===q.a?'bg-emerald-50 text-emerald-900':'bg-rose-50 text-rose-900'}"><b>${a===q.a?'✓ Correct.':'✗ Not quite.'}</b> ${q.e}</div>`:'';
 const nx=(locked||(ex&&a!==undefined))?`<button onclick="qNext()" class="btn btn-p mt-5">${last?'Finish ✓':'Next →'}</button>`:'';
 document.getElementById('qroot').innerHTML=`<div class="card max-w-3xl mx-auto"><div class="flex justify-between items-center text-xs text-slate-500 mb-2"><span class="font-semibold">${qs.unit==='all'?'Mixed':UN[q.u]} · Question ${qs.i+1} of ${qs.list.length}</span><span class="flex gap-2 items-center"><span class="tag">1 mark</span>${ex?'<span class="tag">⏱ <span id="qtimer">'+fmtT(Math.round((Date.now()-qs.t0)/1000))+'</span></span>':''}</span></div>
 <div class="bar mb-6"><i style="width:${Math.round(qs.i/qs.list.length*100)}%"></i></div>${scn(q.q)}<div class="space-y-2.5">${opts}</div>${fb}${nx}
 <div class="text-[11px] text-slate-400 mt-5">Tip: press A–D (or 1–4) to answer and Enter for next.</div></div>`}
function qPick(k){const ex=qs.mode==='exam';if(!ex&&qs.ans[qs.i]!==undefined)return;qs.ans[qs.i]=k;qShow()}
function qNext(){if(qs.ans[qs.i]===undefined)return;if(qs.i+1>=qs.list.length)return qEnd();qs.i++;qShow()}
document.addEventListener('keydown',e=>{if(!qs.active||!document.getElementById('quiz').classList.contains('active'))return;const k='abcd1234'.indexOf(e.key.toLowerCase());if(k>=0){const q=qs.list[qs.i];if(k%4<q.o.length)qPick(k%4)}else if(e.key==='Enter')qNext()});
function qEnd(){clearInterval(qs.timer);qs.active=false;const n=qs.list.length,sc=qs.list.reduce((s,q,i)=>s+(qs.ans[i]===q.a?1:0),0),p=Math.round(sc/n*100),secs=Math.round((Date.now()-qs.t0)/1000);
 const P=loadP();const keys=qs.unit==='all'?Object.keys(UN):[qs.unit];
 if(qs.unit==='all'){qs.list.forEach((q,i)=>{const o=P[q.u]||(P[q.u]={att:0,cor:0,best:null});o.att++;if(qs.ans[i]===q.a)o.cor++})}else{const o=P[qs.unit]||(P[qs.unit]={att:0,cor:0,best:null});o.att+=n;o.cor+=sc;if(o.best==null||p>o.best)o.best=p}saveP(P);
 const miss=qs.list.map((q,i)=>({q,i})).filter(x=>qs.ans[x.i]!==x.q.a).map(x=>`<div class="p-4 rounded-xl bg-slate-50 mb-3 text-sm"><div class="font-semibold mb-1">${x.q.q.replace('||','<br>')}</div><div class="text-rose-600">Your answer: ${x.q.o[qs.ans[x.i]]}</div><div class="text-emerald-700">Correct: ${x.q.o[x.q.a]}</div><div class="text-slate-500 mt-1">${x.q.e}</div></div>`).join('');
 const msg=p>=80?'Excellent, you are mock ready! 🎉':p>=60?'Good progress. Review the misses below.':'Keep going. Revisit the notes and flashcards, then retry.';
 document.getElementById('qroot').innerHTML=`<div class="card max-w-3xl mx-auto"><div class="text-center"><div class="mx-auto w-36 h-36 rounded-full grid place-items-center" style="background:conic-gradient(#5b5bf0 ${p*3.6}deg,#e8eaf6 0)"><div class="w-28 h-28 rounded-full bg-white grid place-items-center"><div><div class="text-3xl font-extrabold text-indigo-600">${p}%</div><div class="text-xs text-slate-500">${sc}/${n}</div></div></div></div>
 <p class="mt-4 font-semibold">${msg}</p><p class="text-xs text-slate-500 mt-1">Time taken: ${fmtT(secs)}${qs.mode==='exam'?` (exam allowance: about ${n} min)`:''}</p>
 <div class="flex justify-center gap-3 mt-5"><button onclick="qStart()" class="btn btn-p">Try again</button><button onclick="qSetup()" class="btn btn-s">Change topic</button></div></div>
 ${miss?`<h4 class="font-extrabold mt-8 mb-3">Review your mistakes (${n-sc})</h4>${miss}`:'<p class="text-center mt-6 text-emerald-700 font-semibold">Perfect score, no mistakes to review!</p>'}</div>`}

fcLoad('u1');renderDash();

/* ===== MULTI-SUBJECT MODULE ===== */
const SJ={
sci:{n:'Science (Double Award)',e:'🧪',b:'Edexcel IGCSE 4SD0',u:'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-science-double-award-2017.html',
ex:['Separate Biology, Chemistry and Physics papers; Foundation and Higher tiers. Confirm tier and timings with your teacher.','Mix of multiple choice, short answer, calculations and extended writing.'],
tech:['Command words: State = one fact; Describe = what happens; Explain = what happens + WHY (use "because").','Calculations: write the formula, substitute, answer with units. Show working for method marks.','6-mark questions: plan 3 linked points, use key terms, finish with a conclusion.','Practicals: name independent, dependent and control variables; say how you would make it reliable (repeats, mean).','Graphs: label axes with units, plot carefully, line of best fit, use the gradient with units.'],
T:{Biology:`Osmosis|Net movement of water across a partially permeable membrane from high to low water potential
Diffusion|Net movement of particles from high to low concentration down a gradient
Active transport|Movement of particles against a concentration gradient using energy from respiration
Enzyme|A biological catalyst, a protein with a specific active site, denatured by high temperature or extreme pH
Photosynthesis|carbon dioxide + water → glucose + oxygen, using light energy absorbed by chlorophyll
Respiration|Chemical reactions releasing energy from glucose; aerobic produces carbon dioxide and water
Mitosis|Cell division producing two genetically identical diploid cells, used for growth and repair
Meiosis|Cell division producing four genetically different haploid gametes
Allele|A different version of the same gene
Natural selection|Individuals with advantageous characteristics survive, reproduce and pass on their alleles`,
Chemistry:`Atomic number|Number of protons in an atom
Isotopes|Atoms of the same element with the same protons but different neutrons
Ionic bonding|Electrostatic attraction between oppositely charged ions formed by electron transfer
Covalent bonding|Sharing of a pair of electrons between non-metal atoms
Mole|Amount of substance; moles = mass ÷ relative formula mass
Exothermic|A reaction that transfers energy to the surroundings, so temperature rises
Electrolysis|Breaking down an ionic compound using electricity; cations go to the cathode
Alkane|Saturated hydrocarbon with the formula CnH2n+2
Alkene|Unsaturated hydrocarbon with a C=C double bond, formula CnH2n; decolourises bromine water
Rate of reaction|Increased by higher temperature, concentration, surface area or a catalyst, giving more frequent successful collisions`,
Physics:`Speed|distance ÷ time
Acceleration|(final velocity − initial velocity) ÷ time
Force|mass × acceleration (F = ma)
Work done|force × distance moved in the direction of the force
Power|work done ÷ time
Kinetic energy|½ × mass × velocity²
Gravitational potential energy|mass × g × height
Density|mass ÷ volume
Ohm's law|Voltage = current × resistance (V = IR)
Half-life|Time for the activity (or number of undecayed nuclei) of a sample to halve`}},
eng:{n:'English Lang & Lit',e:'📖',b:'Edexcel IGCSE English Language A (4EA1) + Literature (4ET1)',u:'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-english-language-a-2016.html',
ex:['Language Paper 1: non-fiction texts and transactional writing (2h15, 90 marks, 60%).','Language Paper 2: poetry and prose texts plus imaginative writing (1h30, 60 marks, 40%).','Literature: Paper 1 poetry and modern prose; Paper 2 modern drama and literary heritage text. Roughly equal weighting.'],
tech:['PEE / PETAL: Point, Evidence (short quote), Explain, link to Writer\'s purpose. Zoom in on single words.','Always name the method (metaphor, juxtaposition, tone shift) AND its effect on the reader.','Transactional writing: match form (letter, article, speech), audience and purpose; use a clear structure with a strong opening and ending.','Imaginative writing: one tight scene, show don\'t tell, vary sentence length, control tense, plan 5 minutes.','Literature: link to context only where it explains the writer\'s choices; build a personal, exploratory argument; compare with specific cross-references.'],
T:{Terminology:`Juxtaposition|Placing contrasting ideas or images side by side to highlight differences
Pathetic fallacy|Weather or setting that mirrors the mood of a scene
Foreshadowing|Hints that suggest later events
Semantic field|A group of words linked by a shared topic or theme
Tone|The writer's attitude, such as sardonic, nostalgic or urgent
Volta|A turning point in a poem where the argument or mood shifts
Enjambment|A sentence running on past the end of a line or stanza
Caesura|A pause within a line, often created by punctuation
Anaphora|Deliberate repetition at the start of successive clauses
Unreliable narrator|A narrator whose account the reader cannot fully trust`,
Writing:`Purpose|What the writer wants to do: inform, argue, persuade, advise, entertain
Audience|The intended reader, which sets register and vocabulary
Rhetorical question|A question asked for effect, not for an answer
Rule of three|Listing three items for rhythm and emphasis
Direct address|Using "you" to involve the reader
Anecdote|A short personal story used to illustrate a point
Counter-argument|Acknowledging an opposing view in order to rebut it
Cohesion|Linking devices and paragraphing that hold writing together`}},
mat:{n:'Mathematics A',e:'➗',b:'Edexcel IGCSE Maths A (4MA1)',u:'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses/international-gcse-mathematics-a-2016.html',
ex:['Two papers, each 2 hours, 100 marks, 50% each; calculator allowed on both.','Higher tier covers grades 4-9; Foundation covers 1-5.'],
tech:['Show every step: method marks (M) are awarded even if the final answer (A) is wrong.','Give answers to 3 significant figures unless told otherwise; keep full calculator values until the end.','"Show that" questions: end with the exact result given, no rounding shortcuts.','Check by estimating, substituting back, or using inverse operations.','Always write units and label bearings, angles and diagrams clearly.'],
T:{Algebra:`Quadratic formula|x = (−b ± √(b² − 4ac)) ÷ 2a
Difference of two squares|a² − b² = (a + b)(a − b)
Gradient|(y₂ − y₁) ÷ (x₂ − x₁)
Straight line|y = mx + c, where m is the gradient and c the y-intercept
Parallel lines|Have equal gradients
Perpendicular lines|Gradients multiply to give −1
nth term of arithmetic sequence|a + (n − 1)d
Completing the square|x² + bx + c = (x + b/2)² + c − b²/4`,
Geometry:`Pythagoras|a² + b² = c² in a right-angled triangle
SOH CAH TOA|sin = O/H, cos = A/H, tan = O/A
Sine rule|a/sin A = b/sin B
Cosine rule|a² = b² + c² − 2bc cos A
Area of triangle|½ab sin C
Circle area and circumference|πr² and 2πr
Arc length|(θ/360) × 2πr
Volume of a cone|⅓πr²h
Volume of a sphere|4/3 πr³
Interior angle sum|(n − 2) × 180°`,
Number:`Compound interest|Amount = P(1 + r/100)ⁿ
Percentage change|(change ÷ original) × 100
Standard form|A number between 1 and 10 multiplied by a power of 10
Product rule for counting|Multiply the number of choices at each stage
Probability of A and B (independent)|P(A) × P(B)
Direct proportion|y = kx
Inverse proportion|y = k/x`}},
cs:{n:'Computer Science',e:'💻',b:'AQA GCSE 8525',u:'https://www.aqa.org.uk/subjects/computer-science/gcse/computer-science-8525/specification',
ex:['Paper 1 Computational thinking and problem-solving (2h, 90 marks, 50%): on-screen programming.','Paper 2 Computing concepts (1h45, 90 marks, 50%): written.'],
tech:['Trace tables: update one variable per row; write values exactly as the program would.','Pseudocode answers: use consistent indentation and meaningful variable names.','"Explain" questions: state the point and what it allows or prevents.','Compare algorithms by efficiency: binary search needs sorted data; merge sort is faster on large lists than bubble sort.','Learn the exact definitions and use them: marks are for precise terms.'],
T:{Programming:`Algorithm|A sequence of steps to solve a problem
Abstraction|Removing unnecessary detail to focus on what matters
Decomposition|Breaking a problem into smaller, manageable parts
Iteration|Repeating a block of code using a loop
Selection|Choosing a path using IF statements
Variable|A named memory location whose value can change
Constant|A named value that cannot change while the program runs
Linear search|Checking each item in turn until the target is found
Binary search|Repeatedly halving a sorted list to locate an item
Bubble sort|Repeatedly swapping adjacent items that are in the wrong order`,
Systems:`CPU|Fetches, decodes and executes instructions
Fetch-decode-execute|The cycle the CPU repeats to run each instruction
RAM|Volatile main memory holding programs and data in use
Cache|Small, fast memory close to the CPU that stores frequently used data
Compiler|Translates all high-level code into machine code before running
Interpreter|Translates and executes code line by line
Bit|A single binary digit, 0 or 1
Hexadecimal|Base 16, used as a shorter way to write binary
Lossy compression|Reduces file size by permanently removing data
Firewall|Monitors and filters network traffic against rules`,
Networks:`LAN|Network covering a small geographical area
WAN|Network covering a large geographical area
IP address|Unique address identifying a device on a network
TCP/IP|Protocol suite governing data transmission and addressing
Packet switching|Data split into packets that can take different routes
Encryption|Scrambling data so only authorised users can read it
SQL injection|Malicious SQL entered into input fields to access or alter a database
Phishing|Fake messages that trick people into revealing sensitive data`}},
fr:{n:'French',e:'🇫🇷',b:'AQA GCSE 8652',u:'https://www.aqa.org.uk/subjects/french/gcse/french-8652/specification',
ex:['Four papers, each 25%: Listening, Speaking, Reading, Writing.','Higher tier (grades 4-9) and Foundation tier (1-5); Foundation and Higher are tiered by paper.'],
tech:['Use three time frames (past, present, future) and opinions with justification in Speaking and Writing.','Include complex structures: si clauses, the conditional, the subjunctive (il faut que), en + present participle.','Listening: read questions first; answers often follow negatives and "mais".','Translation: translate meaning, not word for word; watch tense and agreements.','Learn themes: identity and culture, local area and global issues, current and future study and employment.'],
T:{Grammar:`Perfect tense|avoir/être + past participle, e.g. j'ai mangé, je suis allé(e)
Imperfect|Describes habits and background in the past, e.g. j'habitais
Future proche|aller + infinitive, e.g. je vais voyager
Simple future|Infinitive + er/as/a/ons/ez/ont, e.g. je voyagerai
Conditional|Infinitive + imperfect endings, e.g. je voudrais
Si clause (hypothetical)|Si + imperfect, conditional: si j'avais de l'argent, je voyagerais
Subjunctive|Used after il faut que, e.g. il faut que tu fasses attention
Pronoun y|Replaces à + place or thing, e.g. j'y vais
Pronoun en|Replaces de + noun or quantity, e.g. j'en ai trois`,
Phrases:`À mon avis|In my opinion
Ce qui me plaît, c'est...|What I like is...
Par contre|On the other hand
Bien que + subjunctive|Although
Afin de|In order to
Il y a deux ans|Two years ago
L'année prochaine|Next year
Je voudrais devenir|I would like to become
Il est important de|It is important to
Je suis tout à fait d'accord|I completely agree`}},
geo:{n:'Geography',e:'🌍',b:'AQA GCSE 8035',u:'https://www.aqa.org.uk/subjects/geography/gcse/geography-8035/specification',
ex:['Paper 1 Living with the physical environment (1h30, 88 marks, 35%).','Paper 2 Challenges in the human environment (1h30, 88 marks, 35%).','Paper 3 Geographical applications (1h15, 76 marks, 30%): issue evaluation and fieldwork; includes 6 SPaG marks on Paper 1 and 2.'],
tech:['Use case study names, places, figures and dates in all extended answers.','"Assess" and "evaluate": weigh both sides and give a justified conclusion.','Maps: use 4 or 6-figure grid references (eastings first, then northings).','Describe graphs: trend + figures with units + anomaly.','Fieldwork: be able to justify sampling, methods, data presentation and evaluate reliability.'],
T:{Physical:`Hydraulic action|Force of water compressing air in cracks in cliffs, causing rock to break
Abrasion|Rocks carried by waves scrape and wear away cliff or bed
Longshore drift|Movement of sediment along a coast in a zigzag by swash and backwash
Hard engineering|Man-made structures to control natural processes, e.g. sea walls and groynes
Interlocking spurs|Ridges that alternate and are wound around by a river in its upper course
Meander|A bend in a river formed by erosion on the outside and deposition on the inside
Hydrograph|A graph showing river discharge over time after rainfall
Tectonic hazard|A hazard caused by plate movement, such as an earthquake or volcano
Hadley cell|Atmospheric circulation cell where air rises at the Equator and sinks at 30° N and S
Biome|A large ecosystem defined by climate, soil, plants and animals`,
Human:`Urbanisation|Increase in the proportion of people living in towns and cities
Megacity|A city with more than 10 million people
Push factor|Something that drives people away from a place
Pull factor|Something that attracts people to a place
Sustainable development|Meeting present needs without harming the ability of future generations to meet theirs
Gross National Income|Total income earned by a country's people and businesses, including abroad
Demographic transition model|Shows change in birth and death rates as a country develops
Globalisation|Increasing interconnection of countries through trade, movement and communications
Counter-urbanisation|Movement of people from urban to rural areas
Food security|Having reliable access to enough affordable, nutritious food`}},
rs:{n:'Religious Studies',e:'🕊️',b:'AQA GCSE 8062',u:'https://www.aqa.org.uk/subjects/religious-studies/gcse/religious-studies-8062/specification',
ex:['Two papers, each 1h45, 96 marks, 50%: Paper 1 Beliefs and teachings and practices of two religions; Paper 2 four themes.','Each question has parts worth 1, 2, 4, 5 and 12 marks; the 12 marker includes 3 SPaG marks.'],
tech:['1-mark: pick the answer. 2-mark: give two developed points, or a point plus a development.','4-mark: "Explain two ..." means two points, each developed, with a source of wisdom or authority if asked.','5-mark: "Explain two ... Refer to scripture or a source of wisdom" must include a quote or reference.','12-mark: evaluate: arguments for, arguments for another view, referring to religious teachings, and a justified conclusion.','Use precise terms and name the tradition, such as "Many Christians believe..." rather than "Christians believe...".'],
T:{Beliefs:`Trinity|Christian belief in one God as Father, Son and Holy Spirit
Atonement|The belief that Jesus' death reconciled humans with God
Tawhid|The Islamic belief in the oneness of Allah
Risalah|Islamic belief in prophethood, including the Prophet Muhammad
Akhirah|Islamic belief in life after death and the Day of Judgement
Resurrection|Christian belief that Jesus rose from the dead on the third day
Salvation|Being saved from sin and its consequences
Sanctity of life|The belief that life is holy and belongs to God`,
Themes:`Relationships|Includes marriage, divorce, cohabitation, contraception and gender equality
Religion and life|Includes abortion, euthanasia, animal rights and the origin of the universe
Peace and conflict|Includes just war, pacifism, terrorism and reconciliation
Crime and punishment|Includes aims of punishment, the death penalty and forgiveness
Just war theory|Criteria for a war to be morally justified, including last resort, legitimate authority and proportionality
Pacifism|The belief that violence and war are always wrong
Situation ethics|Making moral choices by doing what is most loving in the situation
Agape|Selfless, unconditional love`}}
};
Object.values(SJ).forEach(s=>{s.T=Object.fromEntries(Object.entries(s.T).map(([k,v])=>[k,L(v)]));s.all=Object.values(s.T).flat()});
const SQ=s=>SJ[s].all.length*2;
const sj={k:'sci',tab:'ex',fci:0,fcf:false,fcTopic:'All',q:null};
function sjRoot(){return document.getElementById('sjroot')}
function sjSet(k,tab){sj.k=k;sj.tab=tab||'ex';sj.fci=0;sj.fcf=false;sj.q=null;sjDraw()}
function sjTab(t){sj.tab=t;sj.q=null;sjDraw()}
function sjDraw(){const S=SJ[sj.k];
const pills=Object.entries(SJ).map(([k,s])=>`<button class="pill ${k===sj.k?'on':''}" onclick="sjSet('${k}')">${s.e} ${s.n}</button>`).join('');
const tabs=[['ex','Exam Guide'],['nt','Notes'],['fc','Flashcards'],['qz','Quiz']].map(([t,l])=>`<button class="pill ${t===sj.tab?'on':''}" onclick="sjTab('${t}')">${l}</button>`).join('');
let body='';
if(sj.tab==='ex')body=`<div class="card"><span class="tag">${S.b}</span><h3 class="text-lg font-extrabold mt-2 mb-3">Exam structure</h3><ul class="text-sm text-slate-600 list-disc pl-5 space-y-1.5">${S.ex.map(x=>`<li>${x}</li>`).join('')}</ul><a class="btn btn-s mt-4" href="${S.u}" target="_blank" rel="noopener">Official specification ↗</a></div><div class="card"><h3 class="text-lg font-extrabold mb-3">Exam technique for 9s</h3>${S.tech.map((x,i)=>`<div class="step"><b class="n">${i+1}</b><span>${x}</span></div>`).join('')}</div>`;
if(sj.tab==='nt')body=Object.entries(S.T).map(([t,a])=>`<div class="nc"><h4>${t}</h4><ul>${a.map(([x,d])=>`<li><b>${x}</b>: ${d}</li>`).join('')}</ul></div>`).join('');
if(sj.tab==='fc'){const tp=['All',...Object.keys(S.T)];const deck=sj.fcTopic==='All'||!S.T[sj.fcTopic]?S.all:S.T[sj.fcTopic];const c=deck[sj.fci%deck.length];
body=`<div class="flex gap-2 flex-wrap">${tp.map(t=>`<button class="pill ${t===sj.fcTopic?'on':''}" onclick="sj.fcTopic='${t}';sj.fci=0;sj.fcf=false;sjDraw()">${t}</button>`).join('')}</div><div class="card text-center cursor-pointer min-h-[220px] flex flex-col justify-center" onclick="sj.fcf=!sj.fcf;sjDraw()"><div class="text-xs text-slate-400 mb-2">${sj.fci%deck.length+1} / ${deck.length} · tap to flip</div><div class="${sj.fcf?'text-base text-slate-700':'text-2xl font-extrabold'}">${sj.fcf?c[1]:c[0]}</div></div><div class="flex gap-2 justify-center"><button class="btn btn-s" onclick="sj.fci=(sj.fci+deck.length-1)%deck.length;sj.fcf=false;sjDraw()">← Prev</button><button class="btn btn-p" onclick="sj.fci=(sj.fci+1)%deck.length;sj.fcf=false;sjDraw()">Next →</button></div>`}
if(sj.tab==='qz')body=sjQuiz(S);
sjRoot().innerHTML=`<div class="flex gap-2 flex-wrap mb-4">${pills}</div><div class="flex gap-2 flex-wrap mb-5">${tabs}</div><div class="space-y-5">${body}</div>`}
function sjQuiz(S){if(!sj.q){return`<div class="card text-center"><h3 class="text-xl font-extrabold">${SQ(sj.k)} question bank</h3><p class="text-sm text-slate-500 my-3">Rounds of 10 drawn from every term and formula in ${S.n}.</p><button class="btn btn-p" onclick="sjStart()">Start 10 questions</button></div>`}
const Q=sj.q;if(Q.i>=Q.l.length)return`<div class="card text-center"><div class="text-4xl font-extrabold">${Q.s}/${Q.l.length}</div><p class="text-sm text-slate-500 my-3">${Q.s>=9?'Grade 9 standard.':Q.s>=7?'Strong. Review the misses in Notes.':'Revisit the flashcards then retry.'}</p><button class="btn btn-p" onclick="sjStart()">New round</button></div>`;
const q=Q.l[Q.i];return`<div class="card"><div class="bar mb-4"><i style="width:${Q.i/Q.l.length*100}%"></i></div><p class="text-xs text-slate-400 mb-2">Question ${Q.i+1} of ${Q.l.length}</p><h3 class="text-lg font-bold mb-4">${q.q}</h3><div class="space-y-2.5">${q.o.map((o,j)=>`<button class="opt ${q.p===undefined?'':j===q.a?'ok':j===q.p?'no':'dim'}" ${q.p===undefined?`onclick="sjPick(${j})"`:'disabled'}><span class="ltr">${'ABCD'[j]}</span><span>${o}</span></button>`).join('')}</div>${q.p!==undefined?`<button class="btn btn-p mt-4" onclick="sj.q.i++;sjDraw()">Next →</button>`:''}</div>`}
function sjStart(){const S=SJ[sj.k],a=S.all;const l=sh(a).slice(0,10).map((t,n)=>{const rev=n%2;const others=sh(a.filter(x=>x!==t)).slice(0,3);const o=sh([t,...others]);const idx=rev?1:0;return rev?{q:`Which term or formula matches: "${t[1]}"?`,o:o.map(x=>x[0]),a:o.indexOf(t)}:{q:`What does "${t[0]}" mean?`,o:o.map(x=>x[1]),a:o.indexOf(t)}});sj.q={l,i:0,s:0};sjDraw()}
function sjPick(j){const q=sj.q.l[sj.q.i];q.p=j;if(j===q.a)sj.q.s++;sjDraw()}
const SJTOTAL=Object.keys(SJ).reduce((s,k)=>s+SQ(k),0);

/* ===== PATCH 2: subject pages ===== */
const r2=v=>Math.round(v*100)/100;
const addT=(k,t,s)=>{SJ[k].T[t]=L(s);SJ[k].all=Object.values(SJ[k].T).flat()};
addT('mat','Statistics',`Mean|Total of values ÷ number of values
Median|Middle value when data is in order
Mode|Most frequent value
Interquartile range|Upper quartile − lower quartile
Frequency density|Frequency ÷ class width, the height of a histogram bar
Cumulative frequency|Running total of frequencies, plotted at the upper class boundary
Expected frequency|Probability × number of trials
Tree diagram|Multiply along branches for "and", add outcomes for "or"`);
addT('sci','Practical skills',`Independent variable|The variable you change
Dependent variable|The variable you measure
Control variable|A variable kept the same to make the test fair
Reliable|Gives consistent results when repeated
Valid|Measures what it is supposed to measure, with variables controlled
Accuracy|How close a measurement is to the true value
Precision|How close repeated measurements are to each other
Anomaly|A result that does not fit the pattern and should be repeated or excluded`);
addT('cs','Data and logic',`Byte|8 bits
Resolution|Number of pixels in an image, such as width × height
Colour depth|Number of bits used for each pixel's colour
Sample rate|Number of sound samples taken per second, in hertz
AND gate|Outputs 1 only if both inputs are 1
OR gate|Outputs 1 if at least one input is 1
NOT gate|Outputs the opposite of its input
Overflow|A result too large for the bits available`);
addT('geo','Fieldwork and skills',`Primary data|Data you collect first-hand in the field
Secondary data|Data collected by someone else, such as census figures
Systematic sampling|Choosing samples at regular intervals
Random sampling|Every item has an equal chance of selection, reducing bias
Stratified sampling|Sampling in proportion to the size of subgroups
Reliability|Whether repeating the method would give similar results
Isoline map|Map joining places of equal value, such as contours
Choropleth map|Map shading areas by darker colours for higher values`);
addT('rs','Practices',`Eucharist|Christian sacrament re-enacting the Last Supper with bread and wine
Baptism|Christian sacrament of initiation using water
Pilgrimage|A journey to a holy place, such as Lourdes or Makkah
Shahada|Muslim declaration of faith, the first Pillar
Salah|Ritual prayer performed five times a day
Zakat|Compulsory giving of 2.5% of savings to the needy
Sawm|Fasting from dawn to sunset during Ramadan
Hajj|Pilgrimage to Makkah, required once in a lifetime if able
Jihad|Struggle in the way of Allah, both inner and outer`);
const TH={sci:['#059669','#0d9488'],eng:['#be185d','#e11d48'],mat:['#2563eb','#4f46e5'],cs:['#0891b2','#0e7490'],fr:['#1d4ed8','#dc2626'],geo:['#65a30d','#16a34a'],rs:['#b45309','#d97706']};
const MK={
sci:[['1-2 marks: State, Name, Give','One precise fact using the spec keyword. No waffle.'],['3-4 marks: Describe, Explain','Describe = what, with figures. Explain = because + science idea, one link per mark.'],['5-6 marks: extended','Logical chain of process, cause, effect. Key terms plus a conclusion.']],
eng:[['Retrieval (1-2 marks)','Quote or paraphrase exactly what is asked. No analysis.'],['Language and structure','Method + short quote + effect on reader + link to purpose.'],['Writing tasks','Plan 5 min, match form and audience, vary sentences, proofread the last 3 min.']],
mat:[['M, A, B marks','M = method, A = accuracy (needs M), B = independent. Show every line.'],['"Show that"','Work to the given result with no rounding, then state it.'],['Problem solving','Plan, label diagrams, keep full values, finish with units.']],
cs:[['1-2 marks: state, define','Use the exact spec definition. Two marks need two separate facts.'],['Trace tables','Update one variable per row. Copy values exactly. Check loop conditions.'],['6-mark: discuss, compare','Balanced points tied to the scenario and a justified conclusion.'],['Programming (Paper 1)','Meaningful names, test edge cases, trace before moving on.']],
fr:[['Speaking','Answer every prompt fully. Use past, present and future with opinions and reasons.'],['Writing','Cover every bullet. Mix tenses. Check accents and agreement.'],['Reading and listening','Read questions first. Watch negatives, numbers and time phrases. Never leave blanks.'],['Translation','Translate meaning, not word for word. Check tense. Omit nothing.']],
geo:[['1-2 marks','Name or state. Use units and figures from the resource.'],['4 marks: Explain','Point, because, so. Two developed links.'],['6-9 marks: Assess, Evaluate','Case study facts, both sides, a judgement. Extended answers may carry SPaG marks.']],
rs:[['1 and 2 marks','Choose the option or give two short, separate answers.'],['4 marks: Explain two','Two developed points: point plus development.'],['5 marks: with source','Two points and at least one source of wisdom or authority.'],['12 marks: Evaluate','Argument with teaching, opposing argument with teaching, justified conclusion, 3 SPaG marks.']]};
const WE={
sci:['Explain why increasing temperature increases the rate of reaction. (3)','Particles gain kinetic energy and move faster (1). They collide more frequently (1) and a greater proportion of collisions exceed the activation energy, so more successful collisions per second (1).'],
eng:['How does the writer show the narrator\'s fear? (8)','The verb "froze" shows fear as physical paralysis (method + quote), making the reader share the narrator\'s helplessness (effect). The later short sentence "Nothing moved." isolates the silence, building tension through structure (method + effect).'],
mat:['Solve x² − 5x − 14 = 0. (3)','(x − 7)(x + 2) = 0 (M1 for a correct method, factorising or formula). x = 7 (A1). x = −2 (A1).'],
cs:['Explain why binary search is more efficient than linear search on a large sorted list. (3)','Binary search halves the remaining items each comparison (1), so needs at most about log₂n comparisons (1), whereas linear search may check all n items (1).'],
fr:['Translate: "Last year I went to Paris with my family and I would like to go back."','L\'année dernière, je suis allé(e) à Paris avec ma famille et je voudrais y retourner.'],
geo:['Explain how longshore drift transports sediment along a coast. (4)','Waves approach at an angle (1), so swash carries material up the beach at that angle (1). Backwash returns straight down the slope under gravity (1). Repeated, this moves sediment in a zigzag along the coast (1).'],
rs:['Explain two reasons why some Christians believe in the Trinity. (4)','Some Christians believe in the Trinity because the Bible shows Father, Son and Spirit together at Jesus\' baptism (point + development). Others believe it because the Nicene Creed states God is one in three persons, and it is recited in worship (point + development).']};
const nq=(t,q,ans,e,f=v=>String(v))=>{ans=r2(ans);const c=[ans+1,ans-1,ans*2,ans/2,ans+10,ans-10,ans*10,ans/10,-ans,ans*1.1,ans*.9].map(r2).filter((x,i,a)=>x!==ans&&x!==0&&a.indexOf(x)===i);return mc(t,q,f(ans),sh(c).slice(0,3).map(f),e)};
const iq=(t,q,ans,e)=>{const c=[ans+1,ans-1,ans+2,ans-2,ans+16,ans-16,ans+8,ans-8].filter((x,i,a)=>x>=0&&x!==ans&&a.indexOf(x)===i);return mc(t,q,String(ans),sh(c).slice(0,3).map(String),e)};
const sq=(t,q,c,w,e)=>mc(t,q,c,w,e);
const lg=(a,b)=>Math.floor(Math.log2(a));
const sgn=v=>v<0?`− ${-v}`:`+ ${v}`;
const GN={
mat:[
()=>{const p=pk([5,10,12,15,20,25,35,40,60,75]),a=ri(2,60)*10;return nq('Number',`Find ${p}% of £${a}.`,p*a/100,`${p}/100 × ${a}`,v=>'£'+v)},
()=>{const p=pk([10,20,25,30,40]),o=ri(4,90)*10,n=r2(o*(1+p/100));return nq('Number',`After a ${p}% increase, a price is £${n}. What was the original price?`,o,`Divide by the multiplier ${1+p/100}.`,v=>'£'+v)},
()=>{const P=ri(2,30)*500,r=pk([2,3,4,5,6]),n=ri(2,5);return nq('Number',`£${P} is invested at ${r}% compound interest per year. Value after ${n} years (nearest penny)?`,P*(1+r/100)**n,`P(1 + r/100)^n = ${P} × ${1+r/100}^${n}`,v=>'£'+v.toFixed(2))},
()=>{const a=ri(3,24),b=ri(3,24);return nq('Geometry',`A right-angled triangle has shorter sides ${a} cm and ${b} cm. Find the hypotenuse (2 dp).`,Math.hypot(a,b),'c = √(a² + b²)',v=>v+' cm')},
()=>{const t=pk([20,25,30,35,40,50,55,60]),h=ri(5,40);return nq('Geometry',`A right-angled triangle has hypotenuse ${h} cm and angle ${t}°. Find the side opposite the angle (2 dp).`,h*Math.sin(t*Math.PI/180),'opp = hyp × sin θ',v=>v+' cm')},
()=>{const x=ri(-8,14),a=ri(2,11),b=ri(-12,18);return nq('Algebra',`Solve ${a}x ${sgn(b)} = ${a*x+b}.`,x,`Subtract ${b} then divide by ${a}.`)},
()=>{const x1=ri(-5,5),y1=ri(-8,8),x2=x1+ri(1,6),y2=ri(-8,10);return nq('Algebra',`Find the gradient of the line through (${x1}, ${y1}) and (${x2}, ${y2}).`,(y2-y1)/(x2-x1),'Δy ÷ Δx')},
()=>{const a=ri(1,12),d=ri(2,9),n=ri(10,40);return nq('Algebra',`The sequence ${a}, ${a+d}, ${a+2*d}, … is arithmetic. Find the ${n}th term.`,a+(n-1)*d,`a + (n − 1)d = ${a} + ${n-1}×${d}`)},
()=>{const p=ri(1,9),q=ri(1,9);return nq('Algebra',`Solve x² − ${p+q}x + ${p*q} = 0. What is the larger solution?`,Math.max(p,q),`Factorise: (x − ${p})(x − ${q}) = 0`)},
()=>{const x=ri(2,15),y=ri(1,x-1);return nq('Algebra',`x + y = ${x+y} and x − y = ${x-y}. Find x.`,x,'Add the equations: 2x = sum')},
()=>{const n=pk([5,6,8,9,10,12,15,18,20,24]);return nq('Geometry',`Find the size of one interior angle of a regular polygon with ${n} sides.`,(n-2)*180/n,'(n − 2) × 180 ÷ n',v=>v+'°')},
()=>{const r=ri(2,15),th=pk([40,60,72,90,120,150]);return nq('Geometry',`A sector has radius ${r} cm and angle ${th}°. Find its arc length (2 dp).`,th/360*2*Math.PI*r,'(θ/360) × 2πr',v=>v+' cm')},
()=>{const l=ri(5,95),d=pk([1,.1,10]);return nq('Number',`A length is ${l} cm to the nearest ${d} cm. What is its upper bound?`,l+d/2,'Add half the rounding unit.',v=>v+' cm')},
()=>{const a=ri(2,9),b=ri(2,9),c=ri(1,6);const n=a+b-c;return mc('Algebra',`Simplify x^${a} × x^${b} ÷ x^${c}.`,'x^'+n,['x^'+(n+1),'x^'+(n-1),'x^'+(a*b-c)].filter((v,i,A)=>v!=='x^'+n&&A.indexOf(v)===i).concat(['x^'+(n+2)]).slice(0,3),'Add powers when multiplying, subtract when dividing.')},
()=>{const m=ri(11,99)/10,e=pk([-6,-5,-4,-3,3,4,5,6,7]),v=e>0?String(Math.round(m*10**e)):(m*10**e).toFixed(-e+1);return mc('Number',`Write ${v} in standard form.`,`${m} × 10^${e}`,[`${m} × 10^${e+1}`,`${m} × 10^${e-1}`,`${m} × 10^${-e}`],'A × 10ⁿ with 1 ≤ A < 10')},
()=>{const p=ri(1,9)/10,n=ri(5,40)*10;return nq('Statistics',`The probability of rain on a day is ${p}. Estimate the number of rainy days in ${n} days.`,p*n,'Expected frequency = probability × trials')},
()=>{const f=ri(3,40),w=pk([2,4,5,10,20]);return nq('Statistics',`A histogram class has frequency ${f} and class width ${w}. Find the frequency density.`,f/w,'Frequency density = frequency ÷ class width')},
()=>{const a=ri(1,6),b=ri(-9,9),c=ri(-9,9),x=ri(-4,5);return nq('Algebra',`Evaluate ${a}x² ${sgn(b)}x ${sgn(c)} when x = ${x}.`,a*x*x+b*x+c,'Substitute carefully; square before multiplying.')},
()=>{const o=ri(10,90)*10,n=ri(5,140)*10;return nq('Number',`A value changes from ${o} to ${n}. Find the percentage change (2 dp).`,(n-o)/o*100,'Change ÷ original × 100',v=>v+'%')},
()=>{const x=ri(2,9),y=ri(5,60),x2=ri(2,15);return nq('Number',`y is directly proportional to x. When x = ${x}, y = ${y*x}. Find y when x = ${x2}.`,y*x2,'y = kx, find k first.')},
()=>{const a=ri(1,9),b=ri(1,9),t=ri(2,20)*(a+b);return nq('Number',`Share £${t} in the ratio ${a}:${b}. How much is the larger share?`,t/(a+b)*Math.max(a,b),'Find one part first.',v=>'£'+v)},
()=>{const d=ri(20,400),t=ri(2,9);return nq('Number',`A car travels ${d} km in ${t} hours. Find its average speed in km/h (2 dp).`,d/t,'speed = distance ÷ time')}],
sci:[
()=>{const d=ri(2,90)*10,t=ri(2,40);return nq('Physics calculations',`A runner covers ${d} m in ${t} s. Find the speed (2 dp).`,d/t,'speed = distance ÷ time',v=>v+' m/s')},
()=>{const m=ri(2,90),a=ri(1,12);return nq('Physics calculations',`A ${m} kg object accelerates at ${a} m/s². Find the resultant force.`,m*a,'F = ma',v=>v+' N')},
()=>{const m=ri(10,900),V=ri(2,60);return nq('Physics calculations',`A block has mass ${m} g and volume ${V} cm³. Find the density (2 dp).`,m/V,'density = mass ÷ volume',v=>v+' g/cm³')},
()=>{const m=ri(1,80),v=ri(2,30);return nq('Physics calculations',`Find the kinetic energy of a ${m} kg object moving at ${v} m/s.`,.5*m*v*v,'KE = ½mv²',x=>x+' J')},
()=>{const m=ri(1,90),h=ri(2,60);return nq('Physics calculations',`Find the gravitational potential energy gained lifting ${m} kg through ${h} m (g = 10 N/kg).`,m*10*h,'GPE = mgh',x=>x+' J')},
()=>{const W=ri(2,90)*100,t=ri(2,60);return nq('Physics calculations',`A motor does ${W} J of work in ${t} s. Find its power (2 dp).`,W/t,'power = work ÷ time',x=>x+' W')},
()=>{const I=ri(1,12),R=ri(2,60);return nq('Physics calculations',`A current of ${I} A flows through a ${R} Ω resistor. Find the potential difference.`,I*R,'V = IR',x=>x+' V')},
()=>{const V=ri(2,24)*5,R=ri(2,50);return nq('Physics calculations',`A ${V} V supply is across a ${R} Ω resistor. Find the current (2 dp).`,V/R,'I = V ÷ R',x=>x+' A')},
()=>{const f=ri(2,500),l=ri(1,20)/4;return nq('Physics calculations',`A wave has frequency ${f} Hz and wavelength ${l} m. Find the wave speed.`,f*l,'v = fλ',x=>x+' m/s')},
()=>{const F=ri(2,90)*10,A=ri(1,40);return nq('Physics calculations',`A force of ${F} N acts on an area of ${A} m². Find the pressure (2 dp).`,F/A,'pressure = force ÷ area',x=>x+' Pa')},
()=>{const m=ri(2,80),v=ri(2,25);return nq('Physics calculations',`Find the momentum of a ${m} kg object moving at ${v} m/s.`,m*v,'p = mv',x=>x+' kg m/s')},
()=>{const u=ri(10,90),t=ri(100,990)/10;return nq('Physics calculations',`${u} J of useful energy is output from ${r2(u*100/t)} J input. Efficiency (%)?`,t,'efficiency = useful ÷ total × 100',x=>x+'%')},
()=>{const n=pk([1,2,3,4,5]),i=pk([320,640,800,960,1600]);return nq('Physics calculations',`A sample has ${i} undecayed nuclei. How many remain after ${n} half-lives?`,i/2**n,'Halve once per half-life.')},
()=>{const mr=pk([['NaCl',58.5],['H₂O',18],['CO₂',44],['CaCO₃',100],['MgO',40],['H₂SO₄',98],['NaOH',40],['NH₃',17],['HCl',36.5],['CH₄',16]]),n=ri(1,40)/4;return nq('Chemistry calculations',`Find the mass of ${n} mol of ${mr[0]} (Mr = ${mr[1]}).`,n*mr[1],'mass = moles × Mr',x=>x+' g')},
()=>{const c=pk([['CaCO₃',100],['MgO',40],['NaOH',40],['H₂O',18],['CO₂',44]]),m=ri(2,60)*5;return nq('Chemistry calculations',`How many moles in ${m} g of ${c[0]} (Mr = ${c[1]})? (2 dp)`,m/c[1],'moles = mass ÷ Mr',x=>x+' mol')},
()=>{const m=ri(2,60),V=ri(1,10)/2;return nq('Chemistry calculations',`${m} g of solute is dissolved to make ${V} dm³ of solution. Concentration in g/dm³ (2 dp)?`,m/V,'concentration = mass ÷ volume')},
()=>{const i=ri(10,90)*10,a=ri(2,40);return nq('Biology calculations',`A cell image is ${i} µm long and the actual cell is ${a} µm. Find the magnification (2 dp).`,i/a,'magnification = image ÷ actual')},
()=>{const n=ri(1,12);return nq('Biology calculations',`A cube has side ${n} cm. Find its surface area : volume ratio as a single number (2 dp).`,6/n,'SA = 6n², V = n³, so ratio = 6 ÷ n')},
()=>{const o=ri(10,90),n=ri(5,120);return nq('Biology calculations',`A potato cylinder changes mass from ${o} g to ${n} g in osmosis. Percentage change (2 dp)?`,(n-o)/o*100,'change ÷ original × 100',x=>x+'%')},
()=>{const I=ri(2,12),t=ri(5,90);return nq('Physics calculations',`A current of ${I} A flows for ${t} s. Charge transferred?`,I*t,'Q = It',x=>x+' C')}],
cs:[
()=>{const n=ri(1,255);return iq('Number systems',`Convert binary ${n.toString(2).padStart(8,'0')} to denary.`,n,'Add the place values where a 1 appears.')},
()=>{const n=ri(1,255),b=n.toString(2).padStart(8,'0'),i=ri(0,7),w=b.slice(0,i)+(b[i]==='1'?'0':'1')+b.slice(i+1),w2=(n^2).toString(2).padStart(8,'0'),w3=(n^16).toString(2).padStart(8,'0');return mc('Number systems',`Convert denary ${n} to 8-bit binary.`,b,[...new Set([w,w2,w3])].filter(x=>x!==b).slice(0,3).concat(['0'+b.slice(0,7)]).slice(0,3),'Subtract place values 128, 64, 32 ...')},
()=>{const n=ri(16,255);return iq('Number systems',`Convert hexadecimal ${n.toString(16).toUpperCase()} to denary.`,n,'First digit × 16 + second digit.')},
()=>{const n=ri(16,255),h=n.toString(16).toUpperCase();return mc('Number systems',`Convert denary ${n} to hexadecimal.`,h,[...new Set([(n+1).toString(16),(n-1).toString(16),(n+16).toString(16)])].map(x=>x.toUpperCase()).filter(x=>x!==h).slice(0,3),'Divide by 16: quotient then remainder.')},
()=>{const a=ri(1,15),b=ri(1,15),s=a+b;return mc('Number systems',`Add binary ${a.toString(2).padStart(4,'0')} and ${b.toString(2).padStart(4,'0')}.`,s.toString(2),[(s+1).toString(2),(s-1>0?s-1:s+2).toString(2),(s+2).toString(2)],`${a} + ${b} = ${s} in denary.`)},
()=>{const n=ri(1,63),k=pk([1,2,3]);return iq('Number systems',`The 8-bit binary for ${n} is shifted left by ${k} places. What is the new denary value?`,n*2**k,`Each left shift doubles the value: ${n} × ${2**k}.`)},
()=>{const n=ri(3,16);return iq('Data representation',`What is the largest denary value that can be stored in ${n} bits?`,2**n-1,'2ⁿ − 1')},
()=>{const w=pk([8,16,32,64,100,200]),h=pk([8,16,32,64,100,200]),d=pk([1,2,4,8,16,24]);return iq('Data representation',`An image is ${w} × ${h} pixels with ${d}-bit colour depth. File size in bytes (ignore metadata)?`,w*h*d/8,'width × height × depth ÷ 8')},
()=>{const r=pk([8000,16000,44100,22050]),d=pk([8,16]),s=ri(2,20);return iq('Data representation',`Sound is sampled at ${r} Hz with ${d}-bit samples for ${s} s (mono). File size in bytes?`,r*d*s/8,'rate × depth × seconds ÷ 8')},
()=>{const n=pk([7,15,31,63,127,255,100,50,200]);return iq('Algorithms',`What is the maximum number of comparisons binary search needs on a sorted list of ${n} items?`,lg(n)+1,'⌊log₂ n⌋ + 1')},
()=>{const n=ri(3,40);return iq('Algorithms',`Trace: total ← 0; FOR i ← 1 TO ${n}: total ← total + i. What is total at the end?`,n*(n+1)/2,'Sum of 1 to n.')},
()=>{const a=ri(20,200),b=ri(3,12);return iq('Programming',`What is ${a} MOD ${b}?`,a%b,'MOD gives the remainder.')},
()=>{const a=ri(20,200),b=ri(3,12);return iq('Programming',`What is ${a} DIV ${b}?`,Math.floor(a/b),'DIV gives the whole-number quotient.')},
()=>{const base=pk(['A','a']),n=ri(0,20),b=base.charCodeAt(0),t=ri(1,20);return iq('Data representation',`The ASCII code for '${base}' is ${b}. What is the code for the character ${t} places later?`,b+t,'Add the offset.')},
()=>{const A=ri(0,1),B=ri(0,1),E=[['A AND B',A&B],['A OR B',A|B],['NOT A',1-A],['A AND NOT B',A&(1-B)],['NOT (A OR B)',1-(A|B)],['A XOR B',A^B]],e=pk(E);return mc('Logic',`A = ${A}, B = ${B}. What is the output of ${e[0]}?`,String(e[1]),[String(1-e[1])],'Evaluate brackets and NOT first, then AND, then OR.')},
()=>{const n=ri(2,9),lim=ri(50,500);let x=1,c=0;while(x<lim){x*=n;c++}return iq('Programming',`Trace: x ← 1; count ← 0; WHILE x < ${lim}: x ← x × ${n}; count ← count + 1. What is count?`,c,'Multiply until x reaches the limit.')}],
geo:[
()=>{const p=ri(5,900)*1000,a=ri(10,900);return nq('Skills',`A city has ${nu(p)} people over ${a} km². Population density (nearest whole)?`,Math.round(p/a),'density = population ÷ area',v=>v+' per km²')},
()=>{const o=ri(10,900)*100,n=ri(10,900)*100;return nq('Skills',`Population changes from ${nu(o)} to ${nu(n)}. Percentage change (2 dp)?`,(n-o)/o*100,'change ÷ original × 100',v=>v+'%')},
()=>{const b=ri(8,45),d=ri(3,20);return nq('Population',`Birth rate ${b} per 1000 and death rate ${d} per 1000. Natural increase per 1000?`,b-d,'birth rate − death rate')},
()=>{const y=ri(15,40)*10,e=ri(5,30)*10,w=ri(40,90)*10;return nq('Population',`A population has ${y} young, ${e} elderly and ${w} working-age people. Dependency ratio (2 dp)?`,(y+e)/w*100,'(young + old) ÷ working × 100')},
()=>{const s=pk([25000,50000,100000]),c=ri(2,12);return nq('Skills',`On a 1:${nu(s)} map two points are ${c} cm apart. Real distance in km (2 dp)?`,c*s/100000,'map cm × scale ÷ 100 000',v=>v+' km')},
()=>{const g=ri(5,900)*1e8,p=ri(2,900)*1e6;return nq('Development',`A country has GNI $${nu(g)} and ${nu(p)} people. GNI per capita (nearest $)?`,Math.round(g/p),'GNI ÷ population',v=>'$'+nu(v))},
()=>{const a=ri(3,30),b=ri(31,90);return nq('Skills',`River discharge rises from ${a} to ${b} cumecs after a storm. By how many cumecs?`,b-a,'Subtract.')},
()=>{const m=ri(2,14)*5,y=ri(3,8);return nq('Physical',`A cliff erodes ${m} m over ${y*5} years. What is the mean erosion per year (2 dp)?`,m/(y*5),'total ÷ years',v=>v+' m/yr')}]
};
const FRV=L(`school|l'école
homework|les devoirs
the environment|l'environnement
pollution|la pollution
unemployment|le chômage
a job|un emploi
salary|le salaire
experience|l'expérience
future|l'avenir
holidays|les vacances
town centre|le centre-ville
the countryside|la campagne
healthy|sain
to recycle|recycler
the climate|le climat
social media|les réseaux sociaux
friendship|l'amitié
a volunteer|un bénévole
poverty|la pauvreté
homeless|sans-abri
to improve|améliorer
to protect|protéger
a skill|une compétence
a career|une carrière
to apply for|postuler
an interview|un entretien
a language|une langue
to travel|voyager
the weather|la météo
a festival|une fête
tradition|la tradition
a customer|un client
the rubbish|les déchets
public transport|les transports en commun
the neighbourhood|le quartier
a rule|un règlement
stress|le stress
a goal|un but
a gap year|une année sabbatique
a charity|une association caritative`);
const FRI=[['être',['suis','es','est','sommes','êtes','sont'],'ser'],['avoir',['ai','as','a','avons','avez','ont'],'aur'],['aller',['vais','vas','va','allons','allez','vont'],'ir'],['faire',['fais','fais','fait','faisons','faites','font'],'fer']];
const FRR=[['parler','parl'],['jouer','jou'],['regarder','regard'],['travailler','travaill'],['écouter','écout'],['habiter','habit'],['visiter','visit'],['étudier','étudi'],['détester','détest'],['aimer','aim'],['donner','donn'],['chanter','chant'],['danser','dans'],['voyager','voyag']];
const PR=['je','tu','il/elle','nous','vous','ils/elles'];
const el=(p,f)=>p==='je'&&/^[aeiouhéè]/.test(f)?`j'${f}`:`${p} ${f}`;
function frQ(){const kind=ri(0,4),p=ri(0,5);let v,t,f,all;
if(kind===0){v=pk(FRI);t='present';all=PR.map((_,i)=>v[1][i]);f=all[p]}
else if(kind===1){v=pk(FRR);t='present';all=['e','es','e','ons','ez','ent'].map(x=>v[1]+x);f=all[p]}
else if(kind===2){v=pk(FRR);t='future';all=['ai','as','a','ons','ez','ont'].map(x=>v[0]+x);f=all[p]}
else if(kind===3){v=pk(FRR);t='imperfect';all=['ais','ais','ait','ions','iez','aient'].map(x=>v[1]+x);f=all[p]}
else{v=pk(FRR);t='perfect (avoir)';const aux=['ai','as','a','avons','avez','ont'];all=aux.map(x=>x+' '+v[1]+'é');f=all[p]}
const w=sh([...new Set(all.filter(x=>x!==f))]).slice(0,3);
return mc('Verb forms',`Complete in the ${t} tense: ${PR[p]} ___ (${v[0]})`,f,w,`${v[0]}, ${t}, "${PR[p]}": ${el(PR[p],f)}`)}
function genPool(k){const S=SJ[k],out=[],seen=new Set(),add=q=>{if(q&&q.o&&new Set(q.o).size===q.o.length&&!seen.has(q.q)){seen.add(q.q);out.push(q)}};
S.all.forEach(x=>{const t=Object.keys(S.T).find(n=>S.T[n].includes(x)),oth=sh(S.all.filter(y=>y!==x));
add(mc(t,`Define: ${x[0]}`,x[1],oth.slice(0,3).map(y=>y[1]),`${x[0]}: ${x[1]}`));
add(mc(t,`Which term or formula matches: "${x[1]}"?`,x[0],oth.slice(0,3).map(y=>y[0]),`${x[0]}: ${x[1]}`));
const tr=R()<.5;add(mc(t,`True or false: ${x[0]} is described by "${tr?x[1]:oth[0][1]}".`,tr?'True':'False',[tr?'False':'True'],`${x[0]}: ${x[1]}`))});
const n=k==='mat'?130:k==='sci'?110:60;(GN[k]||[]).forEach(g=>{let a=0,c=0;while(c<n&&a<n*4){a++;const b=out.length;add(g());if(out.length>b)c++}});
if(k==='fr'){let a=0,c=0;while(c<420&&a<3000){a++;const b=out.length;add(frQ());if(out.length>b)c++}
FRV.forEach(([e,f])=>{add(mc('Vocabulary',`How do you say "${e}" in French?`,f,sh(FRV.filter(x=>x[0]!==e)).slice(0,3).map(x=>x[1]),`${e} = ${f}`));add(mc('Vocabulary',`What does "${f}" mean?`,e,sh(FRV.filter(x=>x[0]!==e)).slice(0,3).map(x=>x[0]),`${f} = ${e}`))})}
if(k==='eng'){const TQ=['simile','metaphor','personification','alliteration','hyperbole','onomatopoeia','rhetorical question','anaphora','pathetic fallacy','juxtaposition','oxymoron','imperatives','tricolon','direct address'];
[['The wind whispered secrets through the empty corridor.','personification'],['Her smile was a lantern in the storm.','metaphor'],['He ran as fast as a startled hare.','simile'],['Bold, brash banners battered the breeze.','alliteration'],['I have told you a million times to tidy this room!','hyperbole'],['The bang of the door echoed and the floorboards creaked.','onomatopoeia'],['Do we really want to leave our future to chance?','rhetorical question'],['We will not give up. We will not give in. We will not look away.','anaphora'],['Rain lashed the windows as the funeral began.','pathetic fallacy'],['The mansion glittered while, outside its gates, children slept on cardboard.','juxtaposition'],['The silence was deafening.','oxymoron'],['Stop. Listen. Act now.','imperatives'],['Education is knowledge, opportunity and hope.','tricolon'],['You, yes you, hold the power to change this.','direct address'],['The factory coughed smoke over the sleeping town.','personification'],['I was a ghost in my own house.','metaphor']].forEach(([s,a])=>add(mc('Language techniques',`Which technique is used in: "${s}"`,a,sh(TQ.filter(x=>x!==a)).slice(0,3),`"${s}" uses ${a}.`)));
[['I think ___ going to win the match.',"they're",['their','there','they']],['The dog wagged ___ tail.','its',["it's","its'",'is']],['She was taller ___ her brother.','than',['then','that','thin']],['The new law will ___ many families.','affect',['effect','affeck','effet']],['The ___ of the medicine was immediate.','effect',['affect','effact','effekt']],['I will ___ my keys if I am careless.','lose',['loose','loss','loos']],['___ welcome to join us.',"You're",['Your','Youre','Yor']],['Everyone came ___ Tom.','except',['accept','expect','exept']],['She gave me good ___ about revision.','advice',['advise','advize','advis']],['Please ___ my apologies.','accept',['except','expect','acept']],['___ coat is this?','Whose',["Who's",'Whos','Whoes']],['Put the books over ___.','there',['their',"they're",'thair']]].forEach(([s,c,w])=>add(mc('SPaG',`Choose the correct word: ${s}`,c,w,`Correct: ${c}.`)))}
if(k==='rs'){const RP=[['Tawhid','Islam','the oneness of Allah'],['Trinity','Christianity','God as Father, Son and Holy Spirit'],['Shahada','Islam','the declaration of faith'],['Salah','Islam','prayer five times a day'],['Zakat','Islam','compulsory giving to the needy'],['Sawm','Islam','fasting during Ramadan'],['Hajj','Islam','pilgrimage to Makkah'],['Eucharist','Christianity','re-enacting the Last Supper'],['Baptism','Christianity','initiation using water'],['Incarnation','Christianity','God becoming human in Jesus'],['Pentecost','Christianity','the Holy Spirit coming upon the disciples'],['Ummah','Islam','the worldwide Muslim community'],['Lent','Christianity','40 days of fasting before Easter'],['Advent','Christianity','preparation before Christmas'],['Nicene Creed','Christianity','a statement of Christian belief'],['Akhirah','Islam','life after death']];
RP.forEach(([t,r,m])=>{add(mc('Beliefs and practices',`Which religion is the term "${t}" associated with?`,r,[r==='Islam'?'Christianity':'Islam'],`${t} (${r}): ${m}.`));add(mc('Beliefs and practices',`In ${r}, "${t}" refers to:`,m,sh(RP.filter(x=>x[0]!==t&&x[1]===r)).slice(0,3).map(x=>x[2]),`${t}: ${m}.`))})}
return out}
const PL={};const pool=k=>PL[k]||(PL[k]=genPool(k).filter(q=>!/^Define:|^Which term or formula|^True or false|^Which religion|^In (Islam|Christianity)|^How do you say|^What does "/.test(q.q)&&q.u!=='SPaG').concat((XQ[k]||[]).map(([u,s])=>{const a=s.split('|');return mc(u,a[0],a[1],a.slice(2,5),a[5])})));
const sj2={ql:20,qt:'All'};
function goSj(k,t){sj.k=k;sj.tab=t||'ov';sj.fci=0;sj.fcf=false;sj.q=null;sj.w=null;sj.fcTopic='All';sj2.qt='All';switchTab('subjects')}
function sjSet(k){goSj(k)}
function sjTab(t){sj.tab=t;sj.q=null;sjDraw()}
function sjFind(v){v=v.toLowerCase();document.querySelectorAll('#sjroot .nc li').forEach(l=>l.style.display=l.textContent.toLowerCase().includes(v)?'':'none')}
function sjDraw(){const k=sj.k,S=SJ[k],[c1,c2]=TH[k],P=pool(k),tp=Object.keys(S.T);
document.getElementById('page-title').textContent=S.n;
document.querySelectorAll('[data-target^="sj-"]').forEach(b=>{const on=b.dataset.target==='sj-'+k;b.classList.toggle('is-active',on);b.classList.toggle('on',on)});
const best=(()=>{try{return localStorage.getItem('sjb_'+k)}catch(e){return null}})();
const hero=`<div style="background:linear-gradient(120deg,${c1},${c2})" class="rounded-3xl text-white p-7 mb-5 shadow-lg"><div class="text-4xl mb-1">${S.e}</div><h2 class="text-3xl font-extrabold">${S.n}</h2><p class="text-sm opacity-90 mt-1">${S.b}</p><div class="flex gap-2 flex-wrap mt-4 text-xs font-bold"><span class="bg-white/20 px-3 py-1 rounded-full">${P.length} questions</span><span class="bg-white/20 px-3 py-1 rounded-full">${WQ[k].length} written</span><span class="bg-white/20 px-3 py-1 rounded-full">${tp.length} topics</span>${best?`<span class="bg-white/25 px-3 py-1 rounded-full">Best round ${best}</span>`:''}</div></div>`;
const tabs=[['ov','Overview'],['sp','Spec checklist'],['tk','Technique'],['nt','Notes'],['fc','Flashcards']].concat(k==='geo'?[['cs','Case studies']]:[],[['wr','Written'],['qz','Practice']]).map(([t,l])=>`<button class="pill ${t===sj.tab?'on':''}" onclick="sjTab('${t}')">${l}</button>`).join('');
let b='';
if(sj.tab==='ov')b=`<div class="card"><h3 class="text-lg font-extrabold mb-3">Exam structure</h3><ul class="text-sm text-slate-600 list-disc pl-5 space-y-1.5">${S.ex.map(x=>`<li>${x}</li>`).join('')}</ul><a class="btn btn-s mt-4" href="${S.u}" target="_blank" rel="noopener">Official specification ↗</a></div><div class="card"><h3 class="text-lg font-extrabold mb-3">Mock week plan</h3>${['Days 7-5: read Notes and drill Flashcards until every card is instant.','Days 4-3: 40-question Practice rounds by weakest topic. Review every miss.','Day 2: write one worked answer per mark band from Technique, then mark it yourself.','Day 1: skim Technique and the formulas or terms you miss. Sleep early.'].map((x,i)=>`<div class="step"><b class="n">${i+1}</b><span>${x}</span></div>`).join('')}</div><div class="card"><h3 class="text-lg font-extrabold mb-3">Topics covered</h3><div class="flex gap-2 flex-wrap">${tp.map(x=>`<span class="tag">${x}</span>`).join('')}</div></div>`;
if(sj.tab==='tk')b=`<div class="card"><h3 class="text-lg font-extrabold mb-3">Exam technique for a 9</h3>${S.tech.map((x,i)=>`<div class="step"><b class="n">${i+1}</b><span>${x}</span></div>`).join('')}</div><div class="card"><h3 class="text-lg font-extrabold mb-3">Question types and how to score full marks</h3><div class="space-y-3">${MK[k].map(([a,t])=>`<div class="strong"><b>${a}</b><br>${t}</div>`).join('')}</div></div><div class="card"><h3 class="text-lg font-extrabold mb-3">Worked example</h3><div class="scn">${WE[k][0]}</div><div class="strong">${WE[k][1]}</div></div>`;
if(sj.tab==='nt'){const u=tp.includes(sj.nu)?sj.nu:tp[0];b=`<div class="flex gap-2 flex-wrap">${tp.map(x=>`<button class="pill ${x===u?'on':''}" onclick="sj.nu='${x}';sjDraw()">${x}</button>`).join('')}</div><div class="nc"><h4>${u} · ${S.T[u].length} key terms</h4><ul>${S.T[u].map(([x,d])=>`<li><b>${x}</b>: ${d}</li>`).join('')}</ul></div>`}
if(sj.tab==='fc'){const deck=S.T[sj.fcTopic]||S.all,c=deck[sj.fci%deck.length];b=`<div class="flex gap-2 flex-wrap">${['All',...tp].map(t=>`<button class="pill ${t===sj.fcTopic?'on':''}" onclick="sj.fcTopic='${t}';sj.fci=0;sj.fcf=false;sjDraw()">${t}</button>`).join('')}</div><div class="card text-center cursor-pointer min-h-[220px] flex flex-col justify-center" onclick="sj.fcf=!sj.fcf;sjDraw()"><div class="text-xs text-slate-400 mb-2">${sj.fci%deck.length+1} / ${deck.length} · tap to flip</div><div class="${sj.fcf?'text-base text-slate-700':'text-2xl font-extrabold'}">${sj.fcf?c[1]:c[0]}</div></div><div class="flex gap-2 justify-center"><button class="btn btn-s" onclick="sj.fci=(sj.fci+${deck.length-1})%${deck.length};sj.fcf=false;sjDraw()">← Prev</button><button class="btn btn-p" onclick="sj.fci=(sj.fci+1)%${deck.length};sj.fcf=false;sjDraw()">Next →</button></div>`}
if(sj.tab==='sp')b=sjSpec(k);if(sj.tab==='wr')b=sjWr(k);if(sj.tab==='cs')b=sjCase(k);if(sj.tab==='qz')b=sjQuiz(k,P);
document.getElementById('sjroot').style.cssText=`--acc:${c1};--acc2:${c2}`;
document.getElementById('sjroot').innerHTML=hero+`<div class="flex gap-2 flex-wrap mb-5">${tabs}</div><div class="space-y-5">${b}</div>`}
function sjQuiz(k,P){const Q=sj.q;
if(!Q){const tps=['All',...new Set(P.map(x=>x.u))];return`<div class="card"><h3 class="text-xl font-extrabold mb-1">Practice</h3><p class="text-sm text-slate-500 mb-4">${P.length} questions available. Choose a length and topic.</p><div class="flex gap-2 flex-wrap mb-3">${[10,20,40].map(n=>`<button class="pill ${sj2.ql===n?'on':''}" onclick="sj2.ql=${n};sjDraw()">${n} questions</button>`).join('')}</div><div class="flex gap-2 flex-wrap mb-5">${tps.map(t=>`<button class="pill ${sj2.qt===t?'on':''}" onclick="sj2.qt='${t}';sjDraw()">${t}</button>`).join('')}</div><button class="btn btn-p" onclick="sjStart()">Start</button></div>`}
if(Q.i>=Q.l.length){const miss=Q.l.filter(q=>q.p!==q.a);return`<div class="card text-center"><div class="text-5xl font-extrabold">${Q.s}/${Q.l.length}</div><p class="text-sm text-slate-500 my-3">${Q.s/Q.l.length>=.9?'Grade 9 standard.':Q.s/Q.l.length>=.75?'Strong. Fix the misses below.':'Revisit Notes and Flashcards, then retry.'}</p><button class="btn btn-p" onclick="sjStart()">New round</button> <button class="btn btn-s" onclick="sj.q=null;sjDraw()">Change settings</button></div>${miss.length?`<div class="card"><h3 class="font-extrabold mb-3">Review your misses (${miss.length})</h3>${miss.map(q=>`<div class="weak mb-2"><b>${q.q}</b><br>Correct: ${q.o[q.a]}<br><span class="text-slate-500">${q.e||''}</span></div>`).join('')}</div>`:''}`}
const q=Q.l[Q.i],d=q.p!==undefined;
return`<div class="card"><div class="bar mb-4"><i style="width:${Q.i/Q.l.length*100}%"></i></div><p class="text-xs text-slate-400 mb-2">${q.u} · ${Q.i+1} of ${Q.l.length}</p><h3 class="text-lg font-bold mb-4">${q.q}</h3><div class="space-y-2.5">${q.o.map((o,j)=>`<button class="opt ${d?(j===q.a?'ok':j===q.p?'no':'dim'):''}" ${d?'disabled':`onclick="sjPick(${j})"`}><span class="ltr">${'ABCD'[j]}</span><span>${o}</span></button>`).join('')}</div>${d?`<div class="scn mt-4">${q.e||''}</div><button class="btn btn-p" onclick="sj.q.i++;sjDraw()">${Q.i+1>=Q.l.length?'Finish':'Next →'}</button>`:''}</div>`}
function sjStart(){const P=pool(sj.k).filter(x=>sj2.qt==='All'||x.u===sj2.qt);sj.q={l:sh(P).slice(0,sj2.ql).map(q=>({...q,p:undefined})),i:0,s:0};sjDraw()}
function sjPick(j){const q=sj.q.l[sj.q.i];q.p=j;if(j===q.a)sj.q.s++;if(sj.q.i+1>=sj.q.l.length){try{localStorage.setItem('sjb_'+sj.k,sj.q.s+'/'+sj.q.l.length)}catch(e){}}sjDraw()}
/* ===== PATCH 3 ===== */
const g3=v=>String(+v.toPrecision(3)),g2=v=>String(r2(v));
const gcd=(a,b)=>b?gcd(b,a%b):a,fr_=(x,y)=>{const g=gcd(x,y);return`${x/g}/${y/g}`};
GN.mat=[
()=>{const a=pk([2,3,5]),b=ri(-9,9),c=ri(-6,6),d=b*b-4*a*c;if(!b||!c||d<=0||Number.isInteger(Math.sqrt(d)))return;const s=Math.sqrt(d);return mc('Algebra',`Solve ${a}x² ${sgn(b)}x ${sgn(c)} = 0. Give the larger solution to 3 s.f.`,g3((-b+s)/(2*a)),[g3((-b-s)/(2*a)),g3((b+s)/(2*a)),g3((-b+s)/a)],'x = (−b ± √(b² − 4ac)) ÷ 2a. Check the sign of −b and the denominator 2a.')},
()=>{const p=ri(1,9),c=ri(-20,20);return mc('Algebra',`Write x² + ${2*p}x ${sgn(c)} in the form (x + p)² + q. Find q.`,String(c-p*p),[String(c+p*p),String(p*p-c),String(c-p)],'(x + p)² = x² + 2px + p², so q = c − p².')},
()=>{const a=ri(5,20),b=ri(5,20),C=pk([35,48,62,75,110,125]),k=Math.cos(C*Math.PI/180);return mc('Trigonometry',`In triangle ABC, AB = ${a} cm, AC = ${b} cm and angle A = ${C}°. Find BC to 2 d.p.`,g2(Math.sqrt(a*a+b*b-2*a*b*k)),[g2(a*a+b*b-2*a*b*k),g2(Math.sqrt(a*a+b*b+2*a*b*k)),g2(Math.abs(a-b))],'Cosine rule a² = b² + c² − 2bc cos A, then take the square root.')},
()=>{const V=ri(8,40)*500,r=pk([8,10,12,15,20]),n=ri(2,5),g=v=>'£'+r2(v).toFixed(2);return mc('Number',`A car costing £${V} depreciates by ${r}% each year. Find its value after ${n} years.`,g(V*(1-r/100)**n),[g(V*(1-r/100*n)),g(V*(1+r/100)**n),g(V*(1-r/100)**(n+1))],'Multiply by (1 − r/100) each year. Depreciation is compound, not simple.')},
()=>{const x=ri(-6,8),y=ri(-6,8),a=ri(2,5),b=ri(2,5),c=ri(1,4);return mc('Algebra',`Solve simultaneously: ${a}x + ${b}y = ${a*x+b*y} and ${c}x − y = ${c*x-y}. What is x?`,String(x),[String(y),String(-x),String(x+y)],'Multiply the second equation by the coefficient of y in the first and add.')},
()=>{const a=ri(2,6),b=ri(-5,8),c=ri(-6,6),k=ri(-3,5),f=x=>a*x+b,g=x=>x*x+c;return mc('Algebra',`f(x) = ${a}x ${sgn(b)} and g(x) = x² ${sgn(c)}. Find fg(${k}).`,String(f(g(k))),[String(g(f(k))),String(f(k)*g(k)),String(f(k)+g(k))],'fg(x) means apply g first, then f.')},
()=>{const a=ri(2,7),b=ri(-8,12),k=ri(-5,6);if(!k)return;const c=b-a*k;return mc('Algebra',`Solve ${b} − ${a}x > ${c}.`,`x < ${k}`,[`x > ${k}`,`x < ${-k}`,`x > ${-k}`],'Dividing by a negative number reverses the inequality sign.')},
()=>{const d=ri(4,30)*10,t=ri(40,95)/10;return mc('Number',`A distance is ${d} m (nearest 10 m) and a time is ${t} s (nearest 0.1 s). Find the upper bound of the speed to 3 s.f.`,g3((d+5)/(t-.05)),[g3((d-5)/(t+.05)),g3((d+5)/(t+.05)),g3(d/t)],'Upper bound of speed = upper bound of distance ÷ lower bound of time.')},
()=>{const t=ri(20,80);return mc('Geometry',`A, B and C lie on a circle, centre O, with C on the major arc. Angle ACB = ${t}°. Find the reflex angle AOB.`,`${360-2*t}°`,[`${2*t}°`,`${180-2*t}°`,`${360-t}°`],'Angle at the centre is twice the angle at the circumference. The reflex angle is 360° minus that.')},
()=>{const w=pk([5,10,15,20]),fd=pk([.4,.8,1.2,1.6,2.4,3.2]);return mc('Statistics',`A histogram bar has class width ${w} and height ${fd}. How many values are in the class?`,g2(w*fd),[g2(fd/w),g2(w/fd),g2(fd*w*2)],'Frequency = frequency density × class width.')},
()=>{const a=ri(-6,6),b=ri(-6,6),c=ri(-6,6),d=ri(-6,6);if(a===c&&b===d)return;return mc('Vectors',`OA = (${a}, ${b}) and OB = (${c}, ${d}). Find |AB| to 2 d.p.`,g2(Math.hypot(c-a,d-b)),[g2(Math.hypot(c+a,d+b)),g2(Math.hypot(c-a,d-b)**2),g2(Math.abs(c-a)+Math.abs(d-b))],'AB = OB − OA, then use Pythagoras.')},
()=>{const m=pk([2,3,4,5]),k=ri(-4,4),x1=m*k,y1=ri(-6,6);return mc('Algebra',`A line has gradient ${m}. Find the equation of the perpendicular line through (${x1}, ${y1}).`,`y = −x/${m} ${sgn(y1+k)}`,[`y = ${m}x ${sgn(y1-m*x1)}`,`y = −${m}x ${sgn(y1+m*x1)}`,`y = x/${m} ${sgn(y1-k)}`],'Perpendicular gradient = −1 ÷ m. Substitute the point to find c.')},
()=>{const a=pk([1,2,3]),b=ri(-3,5),c=ri(-4,6),u=n=>a*n*n+b*n+c;return mc('Algebra',`The first four terms of a sequence are ${[1,2,3,4].map(u).join(', ')}. Find the nth term.`,`${a}n² ${sgn(b)}n ${sgn(c)}`,[`${a}n² ${sgn(b+1)}n ${sgn(c)}`,`${a+1}n² ${sgn(b)}n ${sgn(c)}`,`${a}n² ${sgn(b)}n ${sgn(c+a)}`],'Second difference = 2a. Subtract an², then find the linear part.')},
()=>{const r=ri(3,9),b=ri(3,9),n=r+b;return mc('Probability',`A bag has ${r} red and ${b} blue counters. Two are taken without replacement. Find P(both the same colour).`,fr_(r*(r-1)+b*(b-1),n*(n-1)),[fr_(r*r+b*b,n*n),fr_(2*r*b,n*(n-1)),fr_(r*(r-1),n*(n-1))],'Without replacement: the second denominator is one smaller.')},
()=>{const o=ri(4,60)*10,p=pk([12,15,20,35]),n=r2(o*(1-p/100));return mc('Number',`A coat is reduced by ${p}% in a sale to £${n}. Find the original price.`,'£'+o,['£'+g2(n*(1+p/100)),'£'+g2(n+p),'£'+g2(n/(1+p/100))],`Divide by ${1-p/100}, not add ${p}%.`)},
()=>{const a=ri(2,9),b=pk([2,3,5,6,7]);return mc('Number',`Write √${a*a*b} in the form a√b, where b is as small as possible.`,`${a}√${b}`,[`${b}√${a}`,`${a*a}√${b}`,`${a}√${b*b}`],`√${a*a*b} = √${a*a} × √${b}.`)}];
GN.sci=[
()=>{const m=ri(8,40)*50,u=ri(0,12),v=u+ri(6,18),t=ri(2,9),g=x=>g2(x)+' N';return mc('Forces',`A ${m} kg car accelerates from ${u} m/s to ${v} m/s in ${t} s. Calculate the resultant force.`,g(m*(v-u)/t),[g(m*(v-u)),g(m*v/t),g(m*(v-u)*t)],'a = (v − u) ÷ t, then F = ma.')},
()=>{const m=ri(2,20)/10,T=ri(20,80),P=pk([1500,2000,2500,3000]);return mc('Energy',`A ${P} W kettle heats ${m} kg of water by ${T} °C (c = 4200 J/kg°C). No energy is lost. Calculate the time taken.`,g2(m*4200*T/P)+' s',[g2(m*4200*T/P/60)+' s',g2(m*T/P)+' s',g2(m*4200*T*P)+' s'],'E = mcΔθ, then time = E ÷ P.')},
()=>{const th=ri(5,40)*2,y=ri(40,92),a=th*y/100;return mc('Chemistry calculations',`A reaction should make ${th} g of product but makes ${g2(a)} g. Calculate the percentage yield.`,g2(a/th*100)+'%',[g2(th/a*100)+'%',g2(a/th)+'%',g2(100-a/th*100)+'%'],'% yield = actual ÷ theoretical × 100.')},
()=>{const R=pk([['CaCO₃ → CaO + CO₂','CaCO₃',100,'CaO',56],['2Mg + O₂ → 2MgO','Mg',48,'MgO',80],['2H₂ + O₂ → 2H₂O','H₂',4,'H₂O',36]]),m=ri(1,20)*R[2]/pk([1,2,4]);return mc('Chemistry calculations',`${R[0]}. Calculate the mass of ${R[3]} formed from ${g2(m)} g of ${R[1]}.`,g2(m*R[4]/R[2])+' g',[g2(m*R[2]/R[4])+' g',g2(m)+' g',g2(m*R[4]/R[2]*2)+' g'],'Use the balanced equation: mass ratio = reacting masses.')},
()=>{const G=pk([['CO₂',44],['O₂',32],['NH₃',17],['CH₄',16]]),m=ri(2,40)*2;return mc('Chemistry calculations',`Calculate the volume of ${m} g of ${G[0]} at room temperature and pressure (1 mole = 24 dm³).`,g2(m/G[1]*24)+' dm³',[g2(m/G[1])+' dm³',g2(m*G[1]/24)+' dm³',g2(m/G[1]*22.4)+' dm³'],'moles = mass ÷ Mr, then volume = moles × 24.')},
()=>{const Np=ri(2,20)*50,Ns=ri(1,40)*10,Vp=pk([115,230,240]);return mc('Electricity',`A transformer has ${Np} primary turns and ${Ns} secondary turns. The primary p.d. is ${Vp} V. Find the secondary p.d.`,g2(Vp*Ns/Np)+' V',[g2(Vp*Np/Ns)+' V',g2(Vp+Ns-Np)+' V',g2(Vp*Ns*Np)+' V'],'Vp ÷ Vs = Np ÷ Ns.')},
()=>{const a=ri(2,30),b=ri(2,30);return mc('Electricity',`Resistors of ${a} Ω and ${b} Ω are connected in parallel. Find the total resistance.`,g2(a*b/(a+b))+' Ω',[(a+b)+' Ω',g2((a+b)/2)+' Ω',(a*b)+' Ω'],'1/R = 1/R₁ + 1/R₂, so R is smaller than either resistor.')},
()=>{const A=ri(2,20)*100,h=pk([20,30,40,60]),n=ri(2,5);return mc('Radioactivity',`A source has activity ${A} Bq and half-life ${h} min. Find its activity after ${n*h} min.`,g2(A/2**n)+' Bq',[g2(A/(2*n))+' Bq',g2(A/n)+' Bq',g2(A-n*h)+' Bq'],`${n} half-lives: halve ${n} times.`)},
()=>{const k=ri(1,6),h=5*k*k;return mc('Energy',`A ball is dropped from ${h} m. Ignoring air resistance (g = 10 N/kg), find its speed just before impact.`,10*k+' m/s',[2*10*h+' m/s',g2(Math.sqrt(10*h))+' m/s',10*h+' m/s'],'Gain in KE = loss in GPE: ½mv² = mgh, so v = √(2gh).')},
()=>{const R=ri(2,40),I=ri(2,9);return mc('Electricity',`A ${R} Ω resistor carries a current of ${I} A. Calculate the power dissipated.`,I*I*R+' W',[I*R+' W',g2(I*I/R)+' W',2*I*R+' W'],'P = I²R.')}];
GN.cs=GN.cs.slice(0,14);
const WQ={
sci:[['Describe how you would investigate the effect of temperature on the rate of reaction between sodium thiosulfate and hydrochloric acid. (6)',['Measure fixed volumes of thiosulfate and acid with measuring cylinders','Warm thiosulfate in a water bath to set temperatures (e.g. 20, 30, 40, 50 °C)','Add acid, start the stopwatch, view a cross under the flask','Stop when the cross disappears and record the time','Control concentration, volume and the flask used','Repeat and calculate a mean; plot 1/time against temperature']],['Explain how the leaf is adapted for photosynthesis. (4)',['Large, flat surface area absorbs more light','Thin, so a short diffusion distance for carbon dioxide','Palisade cells packed with chloroplasts near the top','Stomata allow carbon dioxide in and oxygen out (any 4 with explanation)']],['A 1200 kg car accelerates from rest to 24 m/s in 8 s. Calculate the resultant force. (3)',['a = (v − u) ÷ t = 24 ÷ 8 = 3 m/s²','F = ma = 1200 × 3','= 3600 N, with unit']]],
eng:[['Extended task: write the opening of a speech arguing that homework should be banned. Tick what you included.',['Clear form: greeting and direct address to the audience','Strong hook: anecdote, statistic or rhetorical question','Two or three developed arguments with evidence','A counter-argument acknowledged and rebutted','Rule of three or another persuasive device used deliberately','Formal-but-engaging register and varied sentence lengths','A memorable closing call to action','Accurate spelling and a range of punctuation, proofread']],['Extract: "The house had forgotten how to be loud. Dust settled where voices used to." How does the writer create a sense of loneliness? (8)',['Personification of the house "forgotten how to be loud" suggests loss of life','Link to the reader: absence of people, so emptiness is felt','Semantic field of absence: "forgotten", "dust", "used to"','Short second sentence isolates and slows the pace','Tone is mournful and nostalgic, hinting at past happiness','Each point names the method, quotes a word and explains the effect']]],
mat:[['Prove that the sum of three consecutive integers is a multiple of 3. (3)',['Let integers be n, n + 1, n + 2','Sum = 3n + 3','= 3(n + 1), which is a multiple of 3']],['Expand and simplify (x + 3)(x − 2)(x + 1). (3)',['(x + 3)(x − 2) = x² + x − 6','Multiply by (x + 1): x³ + x² − 6x + x² + x − 6','= x³ + 2x² − 5x − 6']],['Show that x³ + 4x − 3 = 0 has a root between 0 and 1. (2)',['f(0) = −3','f(1) = 2: a change of sign, so a root lies between 0 and 1']]],
cs:[['Write pseudocode that takes 10 numbers from the user and outputs the largest. (6)',['Initialise a variable for the largest','Loop exactly 10 times','Input a number each time','Compare with the current largest using >','Update the largest when needed','Output the largest after the loop']],['Show the first two passes of a bubble sort on 5, 3, 8, 1. (4)',['Compare adjacent pairs and swap if out of order','Pass 1 result: 3, 5, 1, 8','Pass 2 result: 3, 1, 5, 8','Repeat until a pass has no swaps: 1, 3, 5, 8']],['Discuss the use of cloud storage for a company\'s customer data. (6)',['Advantage: access from anywhere and easy collaboration','Advantage: automatic backups and scalable storage','Disadvantage: needs internet and relies on the provider','Disadvantage: risk of data breach and hacking','Legal: Data Protection Act / GDPR obligations','A justified conclusion linked to the company']]],
fr:[['Translate into French: "I think social media is useful, but last year my brother spent too much time online and failed his exams. Next year he will study more."',['Je pense que les réseaux sociaux sont utiles','mais l\'année dernière mon frère a passé trop de temps en ligne','et il a raté ses examens','L\'année prochaine il étudiera plus / il va étudier plus']],['90-word task: your ideal job, your work experience, and plans after GCSE. Tick what you included.',['Opinions with reasons (parce que, car)','Perfect and imperfect tenses for work experience','Future tense for plans','Conditional (je voudrais / j\'aimerais)','A complex structure: si clause, bien que + subjunctive, depuis','All bullet points covered in about 90 words','Accents and agreements checked']]],
geo:[['Using a case study of a tectonic hazard, assess the effectiveness of the immediate and long-term responses. (9)',['Named case study with place, date and magnitude (e.g. Nepal 2015, 7.8)','Immediate: rescue teams, tents, food and water from other countries','Immediate limits: landslides blocked roads, remote villages reached slowly','Long-term: rebuilding with safer designs, reconstruction authority','Long-term limits: slow aid, cost, poverty and corruption','Judgement: effective for response, weaker at speed and reach']],['Using Holderness or another UK coastline, evaluate a coastal management scheme. (6)',['Named scheme with figures (e.g. Mappleton rock groynes and revetment, 1991, about £2 million)','Benefit: protected village and road, reduced local erosion','Cost: expensive and needs maintenance','Negative: starved beaches downdrift, so more erosion further south','Judgement weighing benefit against cost and effects elsewhere']],['Using a named city in a lower-income country, explain the challenges of rapid urban growth. (6)',['Named city with figures (Lagos: megacity, around 15 to 20 million)','Cause: rural-urban migration (push and pull) plus natural increase','Informal settlements such as Makoko lack water, sanitation and secure housing','Traffic congestion and pollution','Strain on services, jobs and waste collection','Link of each challenge to growth with developed explanation']]],
rs:[['Explain two reasons why Muslims pray five times a day. Refer to a source of wisdom or authority. (5)',['Salah is one of the Five Pillars, so it is an obligation','Development: it is a duty every adult Muslim must fulfil','Prayer keeps the believer conscious of Allah throughout the day','Development: regular reminders draw them closer to Allah','Source: e.g. Qur\'an 2:43 "establish prayer"']],['"Abortion is always wrong." Evaluate this statement. (12)',['Agree: sanctity of life, life is a gift from God (e.g. Jeremiah 1:5)','Catholic teaching: life begins at conception, Commandment "do not murder"','Muslim view: life is sacred, killing a child out of fear of poverty is forbidden (Qur\'an 17:31)','Disagree: some Christians allow it if the mother\'s life is at risk or by situation ethics (agape)','Muslim view: many scholars allow it before ensoulment or if the mother\'s life is in danger','Justified conclusion and clear, accurate spelling, punctuation and grammar (3 marks)']],['Explain two reasons why Christians believe in the Trinity. (4)',['Point: the Bible shows Father, Son and Spirit together, e.g. Jesus\' baptism','Development: it shows God is one in three persons','Point: the Nicene Creed states the belief and is recited in worship','Development: it unites the Church in a shared statement of faith']]]};
const CSD={
'Nepal earthquake, 2015 (LIC)':['Date and size: 25 April 2015, magnitude 7.8, epicentre about 80 km north-west of Kathmandu','Cause: Indian plate colliding with the Eurasian plate (collision boundary)','Primary effects: around 9,000 deaths, 22,000 injured, 500,000+ homes destroyed','Secondary effects: landslides, an avalanche at Everest Base Camp, damaged UNESCO heritage sites','Responses: international rescue teams and aid, but blocked roads slowed relief; long-term rebuilding led by the National Reconstruction Authority'],
'Christchurch earthquake, 2011 (HIC)':['Date and size: 22 February 2011, magnitude 6.3, shallow (about 5 km), close to the city','Primary effects: 185 deaths, collapse of the CBD buildings and the cathedral spire','Secondary effects: liquefaction flooded streets with silt; thousands of homes in a "red zone"','Why fewer deaths than Nepal: strong building codes, wealth, rapid emergency services','Cost: tens of billions of NZ dollars; insurance covered much of it; rebuilding took years'],
'Holderness coast, UK':['Location: East Yorkshire; one of the fastest-eroding coastlines in Europe, about 2 m per year','Cause: soft boulder clay cliffs, strong waves with a long fetch, hydraulic action and abrasion','Mappleton scheme (1991): rock groynes and revetment, about £2 million, protected the village','Negative effect: starved beaches downdrift, increasing erosion further south at Cowden','Spurn Head: a spit shaped by longshore drift at the mouth of the Humber'],
'River Tees (upper to lower course)':['Source: Pennines near Cross Fell; High Force waterfall (about 21 m) over hard whin sill rock','Upper course: V-shaped valley, interlocking spurs, vertical erosion','Middle and lower: meanders such as Yarm, floodplain, deposition','Management: Cow Green reservoir upstream; flood defences and the Tees Barrage at Stockton','Mouth: Teesmouth estuary with heavy industry and mudflats'],
'Lagos, Nigeria (LIC city)':['Size: Nigeria\'s largest city, a megacity of roughly 15 to 20 million, among the fastest-growing in Africa','Causes of growth: rural-urban migration from poverty (push) and jobs, port and education (pull) plus natural increase','Challenges: informal settlements such as Makoko, congestion, poor sanitation and waste','Opportunities: economic hub, finance, entertainment (Nollywood), ports','Management: Lagos Bus Rapid Transit (2008) and slum upgrading schemes']};
function sjWr(k){const L_=WQ[k];sj.w=sj.w||{i:0,s:false,t:{}};const w=sj.w,q=L_[w.i%L_.length],n=q[1].length,ok=Object.keys(w.t).filter(x=>w.t[x]).length;
return`<div class="card"><p class="text-xs text-slate-400 mb-2">Written question ${w.i%L_.length+1} of ${L_.length}</p><h3 class="text-lg font-bold mb-3">${q[0]}</h3><textarea class="w-full border border-[var(--line)] rounded-xl p-3 text-sm min-h-[140px]" placeholder="Write your answer here, then reveal the mark scheme…"></textarea>${w.s?`<h4 class="font-extrabold mt-4 mb-2">Mark scheme: tick what you earned</h4><div class="space-y-2">${q[1].map((p,j)=>`<button class="opt ${w.t[j]?'ok':''}" onclick="sj.w.t[${j}]=!sj.w.t[${j}];sjDraw()"><span class="ltr">${w.t[j]?'✓':j+1}</span><span>${p}</span></button>`).join('')}</div><p class="mt-3 font-bold">${ok} / ${n} points</p><button class="btn btn-p mt-3" onclick="sj.w={i:sj.w.i+1,s:false,t:{}};sjDraw()">Next question →</button>`:`<button class="btn btn-p mt-4" onclick="sj.w.s=true;sjDraw()">Reveal mark scheme</button>`}</div>`}
function sjCase(k){return Object.entries(CSD).map(([t,f])=>`<div class="nc"><h4>${t}</h4><ul>${f.map(x=>`<li>${x}</li>`).join('')}</ul></div>`).join('')+'<div class="weak">Check these against your class notes: exam boards do not prescribe case studies, so your teacher may have chosen different ones.</div>'}

/* ===== PATCH 5 ===== */
SJ.cs.T=Object.fromEntries(Object.entries({
'1 Algorithms':`Decomposition|Breaking a problem into smaller, more manageable sub-problems
Abstraction|Removing unnecessary detail so only the important features remain
Algorithmic thinking|Working out clear, ordered steps to solve a problem
Flowchart|Diagram of an algorithm using terminator, process, decision and input/output symbols
Pseudocode|Structured, language-independent way of writing an algorithm
Trace table|Records the value of each variable as every line runs, to find output or errors
Linear search|Checks each item in turn; works on unsorted data; up to n comparisons
Binary search|Compares with the middle item and discards half each time; needs sorted data
Bubble sort|Repeatedly compares adjacent items and swaps them; stops when a pass has no swaps
Merge sort|Divides the list into single items then merges them in order (divide and conquer)
Efficiency|How the time or memory needed grows as the amount of data grows`,
'2 Programming':`Data types|Integer, real, Boolean, character and string
Variable and constant|A variable can change while running; a constant is fixed
DIV and MOD|DIV gives the whole-number quotient; MOD gives the remainder
Selection|Choosing a path using IF, ELSE IF and ELSE
Count-controlled iteration|A FOR loop that repeats a set number of times
Condition-controlled iteration|WHILE or REPEAT UNTIL loops that repeat until a condition changes
Array|A fixed-size structure holding items of the same type, accessed by index
Record|A structure holding related fields of different data types
Subroutine|A named block of code; a function returns a value, a procedure does not
Parameter|A value passed into a subroutine
Local and global variables|Local exists only inside its subroutine; global is accessible everywhere
Validation|Automatic check that data is sensible: range, length, presence, format, type
Verification|Checking data was entered correctly, e.g. double entry or proofreading
Authentication|Confirming a user is who they claim to be, e.g. a password
Syntax error|Breaks the rules of the language so the program will not run
Logic error|Program runs but gives wrong output
Normal, boundary, erroneous|Types of test data: typical, at the limits, and invalid`,
'3 Data representation':`Bit and byte|A bit is 0 or 1; a byte is 8 bits
Units|1 kilobyte = 1000 bytes, then megabyte, gigabyte, terabyte, each ×1000
Binary to denary|Add the place values (128, 64, 32 ...) where there is a 1
Hexadecimal|Base 16; one hex digit represents 4 bits
Overflow|A result too large for the bits available
Binary shift|A left shift multiplies by 2 per place; a right shift divides by 2
Character set|ASCII uses 7 bits; Unicode uses more bits to represent many languages and emoji
Bitmap image|Grid of pixels; size = width × height × colour depth
Resolution and colour depth|Number of pixels, and bits per pixel; both increase file size
Sound|Analogue sound sampled at set intervals; size = sample rate × bit depth × seconds
Lossless compression|Reduces file size without losing any data, e.g. run length encoding
Lossy compression|Reduces file size by permanently removing data, e.g. JPEG, MP3
Huffman coding|Frequently used characters get shorter codes, reducing total bits`,
'4 Computer systems':`AND, OR, NOT|Logic gates: AND needs both inputs 1; OR needs either; NOT inverts
ALU|Performs arithmetic and logical operations
Control unit|Decodes instructions and coordinates the CPU
Registers|Tiny fast memory in the CPU: PC, MAR, MDR, ACC
Program counter (PC)|Holds the address of the next instruction
MAR and MDR|Memory address register holds an address; memory data register holds the data fetched or written
Accumulator (ACC)|Stores the results of ALU calculations
Fetch-decode-execute cycle|Fetch: address from PC to MAR, instruction copied into MDR, PC incremented. Decode: control unit interprets it. Execute: instruction is carried out
Von Neumann architecture|Instructions and data stored together in main memory, with one shared bus
Clock speed|Cycles per second (Hz); a higher speed means more instructions per second
Cache|Small, fast memory holding frequently used instructions, reducing slower RAM access
Number of cores|Each core can run instructions at once, improving multitasking performance
RAM and ROM|RAM is volatile read-write memory; ROM is non-volatile and holds start-up instructions
Virtual memory|Part of secondary storage used as RAM when RAM is full
Secondary storage|Non-volatile storage: magnetic (HDD), solid state (SSD) and optical
Embedded system|Computer built into a device for a dedicated function, e.g. a washing machine
Operating system|Manages memory, files, multitasking, peripherals, security and the user interface
Compiler, interpreter, assembler|Translators: compiler converts all code first; interpreter runs line by line; assembler converts assembly to machine code
High-level and low-level|High-level is readable (Python); low-level is machine code or assembly, close to the hardware`,
'5 Networks':`PAN, LAN, WAN|Personal, local and wide area networks, by geographic size
Client-server|Central server provides services and storage to clients; easier to manage and secure
Peer-to-peer|Devices share resources directly with no central server
Star topology|Every device connects to a central switch; one cable fault affects only one device
Bus topology|Devices share a single backbone cable; cheap, but a fault can disrupt all
Router|Forwards packets between networks using IP addresses
Switch|Sends data only to the intended device on a LAN
Wireless access point|Allows devices to connect to a network by Wi-Fi
NIC|Network interface card, giving a device a network connection
IP and MAC address|IP identifies a device on a network and can change; MAC is a fixed hardware address
DNS|Translates domain names such as example.com into IP addresses
Packet switching|Data split into numbered packets, sent by different routes and reassembled
Protocol|An agreed set of rules for communication
TCP and UDP|TCP splits data, numbers packets and checks delivery; UDP is faster with no delivery checks
HTTP and HTTPS|Protocols for web pages; HTTPS encrypts data using TLS
FTP|File Transfer Protocol, for transferring files
SMTP, POP3, IMAP|SMTP sends email; POP3 downloads it; IMAP keeps it on the server
Application layer|Top layer: protocols for the user's program, e.g. HTTP, SMTP
Transport layer|Splits data into packets and manages delivery (TCP, UDP)
Network layer|Adds IP addresses and routes packets (IP)
Link layer|Sends data across the physical connection, e.g. Ethernet, Wi-Fi
Layering benefits|Each layer can be changed independently and teams can work on layers separately
Wi-Fi security|WPA2 encryption, strong passwords and MAC address filtering`,
'6 Cyber security':`Phishing|Fake messages that trick people into giving personal data
Social engineering|Manipulating people into revealing information: blagging, shouldering, phishing
Malware|Malicious software: virus, worm, trojan, spyware, ransomware
Brute-force attack|Trying every possible password combination
Denial of service|Flooding a server with requests so legitimate users cannot access it
Data interception|Capturing data on a network, often protected by encryption
SQL injection|Entering SQL into a form to read or change a database
Penetration testing|Authorised attack on a system to find weaknesses
Firewall|Filters network traffic against a set of rules
Anti-malware|Software that detects and removes malicious programs
Biometrics|Authentication using fingerprints, face or retina scans
Two-factor authentication|Needs two different proofs of identity
CAPTCHA|A test proving a user is human, to stop bots
Encryption|Scrambling data with a key so only authorised users can read it`,
'7 Databases and SQL':`Table, record, field|A table holds records (rows); each record has fields (columns)
Primary key|A field that uniquely identifies each record
Foreign key|A field linking to the primary key of another table
Relational database|Multiple linked tables, reducing duplicated data
SELECT ... FROM|Chooses which fields and table to display
WHERE|Filters records that meet a condition
ORDER BY|Sorts the results
INSERT INTO|Adds a new record
UPDATE ... SET|Changes existing records
DELETE FROM|Removes records
LIKE and wildcard %|Matches a pattern, e.g. LIKE 'S%'`,
'8 Ethics, law and environment':`Data Protection Act 2018|UK law (GDPR) requiring personal data to be fair, accurate, secure and not kept longer than needed
Computer Misuse Act 1990|Makes unauthorised access, and access with intent to commit further crime, illegal
Copyright, Designs and Patents Act 1988|Protects creators; it is illegal to copy or share software and media without permission
Open source and proprietary|Open source code can be viewed and modified; proprietary code is protected and paid for
Privacy|Concerns over data collected, tracked and shared by companies and governments
Digital divide|Gap between people with and without access to technology
Automation and AI|Raises ethical issues such as job losses, bias and accountability
E-waste and energy use|Discarded devices and data centres harm the environment
Stakeholders|Everyone affected by a technology: users, employers, communities`}).map(([k,v])=>[k,L(v)]));
SJ.cs.all=Object.values(SJ.cs.T).flat();
const XQ={cs:[
['Computer systems','During the fetch stage, which happens first?|The address in the PC is copied to the MAR|The control unit decodes the instruction|The ALU carries out a calculation|The PC is reset to zero|Fetch: PC to MAR, the instruction is copied to the MDR, then the PC increments.'],
['Computer systems','Why does increasing cache size usually improve performance?|Frequently used instructions are closer to the CPU so there are fewer slower RAM accesses|Cache is non-volatile so no data is ever lost|Cache increases the number of cores|Cache replaces RAM entirely|Cache is faster than RAM and sits close to the CPU.'],
['Computer systems','A compiler differs from an interpreter because it|translates the whole program before it runs|translates one line at a time|only works on assembly code|never produces machine code|Interpreters run line by line and stop at the first error.'],
['Networks','Which layer adds source and destination IP addresses to packets?|Network layer|Application layer|Transport layer|Link layer|The network (internet) layer addresses and routes packets.'],
['Networks','Which layer splits data into packets and checks they all arrive (TCP)?|Transport layer|Application layer|Network layer|Link layer|TCP numbers packets and requests any missing ones.'],
['Networks','Which protocol keeps emails on the server so they can be read from several devices?|IMAP|POP3|SMTP|FTP|POP3 downloads email; IMAP keeps it on the server; SMTP sends it.'],
['Networks','Why is HTTPS more secure than HTTP?|Data is encrypted so it cannot be read if intercepted|It is faster|It uses a different language|It only works on LANs|HTTPS uses TLS encryption.'],
['Networks','Which is an advantage of a star network over a bus network?|A failed cable only disconnects one device|It uses less cable|It needs no central device|It is cheaper to install|In a star network each device has its own cable to the switch.'],
['Networks','Why might packets arrive in a different order from which they were sent?|They can travel by different routes|They are encrypted differently|The sender sends them backwards|The router deletes some|Packet switching lets each packet choose its own route; the destination reassembles them.'],
['Databases and SQL','Which statement lists the Name of every student in Year 11 from the Students table?|SELECT Name FROM Students WHERE Year = 11|GET Name FROM Students WHERE Year = 11|SELECT Students FROM Name WHERE Year = 11|SELECT * Name WHERE Year = 11|SELECT fields FROM table WHERE condition.'],
['Databases and SQL','What is the purpose of a foreign key?|It links a record to the primary key in another table|It uniquely identifies records in its own table|It encrypts a field|It sorts the table|Foreign keys create relationships between tables.'],
['Cyber security','An email pretending to be from a bank asks you to enter your password. This is|phishing|a denial of service attack|brute force|shouldering|Phishing is a form of social engineering.'],
['Ethics, law and environment','A hacker gains unauthorised access to a school network but changes nothing. Which law is broken?|Computer Misuse Act 1990|Data Protection Act 2018|Copyright, Designs and Patents Act 1988|Health and Safety at Work Act|Section 1 covers unauthorised access to computer material.'],
['Programming','Age must be between 11 and 16 inclusive. Which value is boundary test data?|16|13|25|"ten"|Boundary data is at the limits; 25 and "ten" are erroneous.'],
['Programming','A program checks that a username field is not left empty. This is a|presence check|range check|format check|verification|Presence checks confirm some data has been entered.']]};
const SP=s=>s.split(';').map(x=>{const[a,b]=x.split('|');return[a,+b]});
const SPEC={
cs:SP('3.1 Algorithms|1;3.2 Programming|1;3.3 Data representation|1;3.4 Computer systems: FDE cycle, logic, memory, software|1;3.5 Networks: layers, protocols, topologies|1;3.6 Cyber security|1;3.7 Relational databases and SQL|1;3.8 Ethical, digital and environmental impacts|1'),
sci:SP('Biology: nature and variety of organisms|0;Biology: cells, transport, enzymes|1;Biology: photosynthesis and respiration|1;Biology: gas exchange, circulation, excretion|0;Biology: coordination and hormones|0;Biology: reproduction and inheritance|1;Biology: evolution and selection|1;Biology: ecology and the environment|0;Chemistry: atomic structure and bonding|1;Chemistry: periodic table and groups|0;Chemistry: acids, alkalis, salts|0;Chemistry: electrolysis|1;Chemistry: energetics and rates|1;Chemistry: organic chemistry|1;Chemistry: tests, gases, metal extraction|0;Physics: motion and forces|1;Physics: energy and power|1;Physics: electricity|1;Physics: waves and EM spectrum|0;Physics: radioactivity|1;Physics: magnetism and electromagnetism|0;Physics: space|0;Practical skills|1'),
eng:SP('Language Paper 1: reading non-fiction|0;Language Paper 1: transactional writing|1;Language Paper 2: poetry and prose reading|0;Language Paper 2: imaginative writing|1;Literature: poetry anthology|0;Literature: modern prose|0;Literature: modern drama|0;Literature: heritage text|0;Language techniques and terminology|1;Spelling, punctuation and grammar|0'),
mat:SP('Fractions, decimals, percentages|1;Ratio, proportion, rates|1;Indices, surds, standard form|1;Bounds|1;Algebraic manipulation and factorising|1;Equations and inequalities|1;Sequences|1;Graphs and functions|1;Differentiation|0;Transformations and vectors|1;Trigonometry and bearings|1;Circle theorems|1;Area, volume, arc and sector|1;Similarity and congruence|0;Probability|1;Statistics: averages, histograms, cumulative frequency|1;Proof|1'),
fr:SP('Theme 1: Identity and culture|0;Theme 2: Local, national, international and global areas|0;Theme 3: Current and future study and employment|0;Tenses: present, perfect, imperfect, future, conditional|1;Subjunctive and complex structures|1;Opinions and connectives|1;Speaking: role play, photo card, conversation|1;Writing: 90 and 150 word tasks|1;Translation both ways|1;Listening and reading skills|0'),
geo:SP('Natural hazards: tectonic|1;Natural hazards: weather and climate change|0;Living world: ecosystems, rainforests, hot deserts|0;Coastal landscapes|1;River landscapes|1;Glacial landscapes|0;Urban issues and challenges|1;Changing economic world and development|1;Resource management: food, water, energy|0;Paper 3: issue evaluation|0;Paper 3: fieldwork and skills|1'),
rs:SP('Christianity: beliefs|1;Christianity: practices|1;Judaism: beliefs|1;Judaism: practices|1;Theme: relationships and families|0;Theme: religion and life|1;Theme: peace and conflict|1;Theme: crime and punishment|0;Theme: human rights and social justice|0;12-mark evaluation technique|1')};
WQ.cs.push(['Describe the fetch-decode-execute cycle. (4)',['Fetch: the address in the PC is copied to the MAR','The instruction is fetched from memory into the MDR and the PC is incremented','Decode: the control unit decodes the instruction','Execute: the instruction is carried out, e.g. by the ALU']],['Explain the roles of the transport layer and the network layer when a web page is sent. (4)',['Transport layer: TCP splits the data into numbered packets','Transport layer: checks all packets arrive and requests missing ones','Network layer: adds source and destination IP addresses','Network layer: routers forward each packet towards its destination']]);
function sjSpec(k){let d={};try{d=JSON.parse(localStorage.getItem('sjs_'+k)||'{}')}catch(e){}const A=SPEC[k],n=A.filter((x,i)=>d[i]).length;
return`<div class="card"><div class="bar mb-3"><i style="width:${n/A.length*100}%"></i></div><p class="text-sm text-slate-500 mb-3">${n} of ${A.length} spec areas ticked. Tick each one when you can answer exam questions on it. "In hub" means notes and questions exist here.</p><div class="space-y-2">${A.map((x,i)=>`<button class="opt ${d[i]?'ok':''}" onclick="sjTick('${k}',${i})"><span class="ltr">${d[i]?'✓':i+1}</span><span>${x[0]} <span class="tag">${x[1]?'In hub':'Not yet in hub'}</span></span></button>`).join('')}</div></div>`}
function sjTick(k,i){try{const d=JSON.parse(localStorage.getItem('sjs_'+k)||'{}');d[i]=!d[i];localStorage.setItem('sjs_'+k,JSON.stringify(d))}catch(e){}sjDraw()}

const L2=o=>Object.fromEntries(Object.entries(o).map(([k,v])=>[k,L(v)]));
/* ===== PATCH 6: Double Award split ===== */
{const SG=GN.sci;GN.bio=[];GN.chem=[];GN.phys=[];SG.forEach(f=>{const u=f().u;(/Chem/.test(u)?GN.chem:/Bio/.test(u)?GN.bio:GN.phys).push(f)});
GN.chem.push(
()=>{const a=ri(20,30),b=ri(25,29),c=ri(30,40),x=ri(60,85),y=ri(5,20),z=100-x-y;if(z<=0)return;return mc('Chemistry calculations',`Magnesium has three isotopes: ${x}% ²⁴Mg, ${y}% ²⁵Mg and ${z}% ²⁶Mg. Calculate its relative atomic mass (2 d.p.).`,g2((x*24+y*25+z*26)/100),[g2((24+25+26)/3),g2((x*24+y*25+z*26)/75),g2((x*24+y*25+z*26)/10)],'Ar = Σ(isotope mass × % abundance) ÷ 100.')},
()=>{const C=pk([['Ca₃(PO₄)₂',310,120],['CaCO₃',100,40],['Fe₂O₃',160,112],['Al₂O₃',102,54],['MgSO₄',120,24]]);return mc('Chemistry calculations',`Calculate the percentage by mass of the metal in ${C[0]} (Mr = ${C[1]}). Give 2 s.f.`,g3(C[2]/C[1]*100)+'%',[g3(C[1]/C[2]*100)+'%',g3(C[2]/C[1])+'%',g3(100-C[2]/C[1]*100)+'%'],'% by mass = (Ar × number of atoms) ÷ Mr × 100.')},
()=>{const m=ri(20,100),T=ri(4,15),n=ri(2,9)/50,q=m*4.2*T;return mc('Chemistry calculations',`${m} g of water rises ${T} °C when ${n} mol of a solid dissolves (c = 4.2 J/g°C). Find ΔH in kJ/mol.`,g3(-q/n/1000)+' kJ/mol',[g3(q/n/1000)+' kJ/mol',g3(-q/n)+' J/mol',g3(-q/1000)+' kJ/mol'],'q = mcΔT, then ΔH = −q ÷ moles for a temperature rise (exothermic), converted to kJ.')},
()=>{const m=ri(5,60)*2;return mc('Chemistry calculations',`Fe₂O₃ + 3CO → 2Fe + 3CO₂. Calculate the mass of Fe₂O₃ (Mr 160) needed to make ${m} g of Fe (Ar 56).`,g3(m/56/2*160)+' g',[g3(m/56*160)+' g',g3(m/56/2*56)+' g',g3(m/160*2*56)+' g'],`moles Fe = ${m} ÷ 56; the ratio is 2 Fe : 1 Fe₂O₃; then × 160.`)});
GN.bio.push(()=>{const a=ri(3,12),b=ri(2,9);return mc('Biology calculations',`Cubes A (side ${a} mm) and B (side ${b} mm) are placed in dye. Which has the larger surface area : volume ratio?`,a<b?'Cube A':'Cube B',['Both equal',a<b?'Cube B':'Cube A','Cannot be determined'].slice(0,3),'SA:V = 6 ÷ side, so the smaller cube has the larger ratio and diffuses faster.')});
GN.bio.push(()=>{const q=ri(2,12),n=ri(20,60),A=pk([400,800,1200,2000]);return nq('Ecology skills',`A ${A} m² field is sampled with ${n} quadrats of 1 m². The mean count is ${q} daisies per quadrat. Estimate the population.`,q*A,'Population = mean per m² × total area.')},()=>{const i=ri(50,400)*10,a=ri(5,60);return nq('Biology calculations',`A cell is ${i} mm long in a drawing and is actually ${a} µm long. Calculate the magnification (nearest whole number).`,Math.round(i*1000/a),'Convert mm to µm (×1000) first: magnification = image ÷ actual.')},()=>{const i=ri(10,90)*100,o=ri(1,9)*10;return nq('Ecology skills',`A trophic level receives ${i} kJ and passes ${o*i/100} kJ to the next level. What percentage of the energy is transferred?`,o,'% transferred = energy passed on ÷ energy received × 100',v=>v+'%')},()=>{const t=ri(10,60),b=ri(12,90);return nq('Biology calculations',`A student counts ${b} bubbles from pondweed in ${t} seconds. How many bubbles per minute (1 d.p.)?`,b/t*60,'Rate = bubbles ÷ time, converted to per minute.')});
SJ.bio={n:'Biology',e:'🧬',b:'Edexcel IGCSE Double Award · Biology',u:SJ.sci.u,ex:['Double Award Science is examined as Biology, Chemistry and Physics papers. Check your tier and paper times with your teacher.','Your mock papers reward short precise answers, 6-mark "explain" chains, practical design and graph work.'],tech:['Organ, tissue, enzyme and cell terms: give the exact definition, because 1-mark questions credit one precise idea.','"Explain" = point + because. Adrenaline-type questions need the effect AND its advantage to the person.','Practical design (e.g. salt and amylase): name independent, dependent and control variables, a time or measurement, and repeats.','Osmosis: say water moves from high to low water potential through a partially permeable membrane.','Gas exchange: always link large surface area, thin walls, good blood supply to a steep concentration gradient.'],T:L2({
'Cells and transport':`Organ|A group of tissues working together to do one job
Cell membrane|Partially permeable; controls what enters and leaves the cell
Diffusion|Net movement from high to low concentration; faster with a bigger gradient or higher temperature
Osmosis|Water moves from high to low water potential through a partially permeable membrane
Active transport|Movement against a concentration gradient using energy from respiration
Surface area : volume ratio|Smaller cells have a larger ratio, so exchange is faster
Enzyme|Biological catalyst; the substrate fits the active site; denatured by high temperature or extreme pH
Amylase, protease, lipase|Break down starch, protein and fats; salt, pH and temperature can alter their rate
Bile|Made in the liver; emulsifies fat and neutralises stomach acid`,
'Plants and respiration':`Photosynthesis|carbon dioxide + water → glucose + oxygen, using light absorbed by chlorophyll
Limiting factor|The variable in shortest supply: light, carbon dioxide or temperature
Starch test|De-starch in the dark, boil then soften in ethanol, add iodine: blue-black means starch
Stomata and guard cells|Allow gas exchange; guard cells open and close the stomata
Xylem and phloem|Xylem carries water and minerals up; phloem carries sugars
Transpiration|Loss of water vapour from leaves, increased by heat, wind, low humidity
Aerobic respiration|glucose + oxygen → carbon dioxide + water + energy
Anaerobic respiration|Yeast: glucose → ethanol + carbon dioxide. Muscle: glucose → lactic acid
Boil and cool glucose|Kills microbes and removes dissolved oxygen; cooling avoids killing yeast`,
'Human body systems':`Alveoli adaptations|Large surface area, thin walls, moist, rich blood supply: fast diffusion
Fish gills|Many filaments and lamellae give a large surface area, thin walls and a good blood supply
Inhalation|Diaphragm contracts and flattens, ribs move up and out, volume increases, pressure falls
Double circulation|Blood passes through the heart twice per circuit: lungs, then body
Arteries, veins, capillaries|Thick muscular walls; valves and wide lumen; one-cell-thick walls
Plasma|Transports CO₂, urea, glucose, hormones, heat and digested food
Red and white cells|Red cells carry oxygen with haemoglobin; white cells defend against disease
Phagocyte and lymphocyte|Phagocytes engulf pathogens; lymphocytes make antibodies specific to antigens
Stomach acid|HCl kills bacteria and gives the optimum pH for protease
Adrenaline|Raises heart rate, dilates pupils, diverts blood to muscles and releases glucose for "fight or flight"
Homeostasis|Keeping internal conditions constant by negative feedback, e.g. insulin and glucagon`,
'Ecology and inheritance':`Population, community, ecosystem|Same species; all species together; community plus the environment
Producer and primary consumer|Producers make food by photosynthesis; the next trophic level eats them
Energy loss in food chains|Lost as heat, movement and waste, so pyramids narrow
Gene and allele|A gene is a section of DNA coding for a protein; alleles are versions of a gene
Genotype and phenotype|The alleles present; the observable characteristic
Dominant and recessive|Dominant shows with one copy; recessive needs two
Mitosis and meiosis|Mitosis: identical cells for growth; meiosis: four different gametes
Natural selection|Better-adapted individuals survive and pass on alleles; antibiotic resistance is an example`})};
SJ.chem={n:'Chemistry',e:'⚗️',b:'Edexcel IGCSE Double Award · Chemistry',u:SJ.sci.u,ex:['Your Chemistry mark schemes use M1, M2, M3 marking points, with "ALLOW", "REJECT" and "ecf" (error carried forward) notes.','Common formats: "any 3 from", "explanation that links these points", calculations with marks for each step, and graphs with tangents.'],tech:['In covalent molecules say "weak intermolecular forces": mentioning breaking covalent bonds can cost you M2 and M3.','Giant covalent (SiO₂, diamond): strong covalent bonds, lots of energy to break them. Do NOT mention intermolecular forces or you lose a mark.','Covalent bonding: attraction between nuclei (plural) and the shared pair of electrons. Never write "nucleus".','Calculations: show each step (moles, ratio, mass). A correct answer without working still scores, but wrong ones need steps for ecf.','Rate graphs: draw a tangent, take its gradient, give units such as g/min.','Test answers need the reagent, then the observation (e.g. add NaOH, brown precipitate).'],T:L2({
'Particles and bonding':`Changes of state|Freezing (liquid to solid), evaporation (liquid to gas), sublimation (solid to gas)
Gas particles|Far apart, randomly arranged, moving freely with high energy
Sub-atomic particles|Proton: mass 1, charge +1; neutron: 1, 0; electron: about 1/1850, −1
Isotopes|Same number of protons, different numbers of neutrons
Relative atomic mass|Weighted mean mass of isotopes: Σ(mass × % abundance) ÷ 100
Ionic bonding|Strong attraction between oppositely charged ions in a giant lattice; high melting point
Covalent bond|Attraction between the nuclei and a shared pair of electrons
Simple molecular|Weak intermolecular forces need little energy to overcome, so low melting points
Giant covalent|Many strong covalent bonds, e.g. diamond and silicon dioxide; 4 bonds per atom, no layers
Graphite|Layers with weak forces between them slide; delocalised electrons conduct
Metallic bonding|Lattice of positive ions in a sea of delocalised electrons; layers slide`,
'Reactions and calculations':`Moles|moles = mass ÷ Mr; use the balanced equation ratio
Percentage by mass|(Ar × atoms) ÷ Mr × 100
Reactivity series|K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Cu: a more reactive metal displaces a less reactive one
Rusting|Iron needs oxygen and water to form hydrated iron(III) oxide
Galvanising|Zinc coating: acts as a barrier and is sacrificial because it oxidises in preference to iron
Oxidation and reduction|Oxidation: gain of oxygen or loss of electrons; reduction: loss of oxygen or gain of electrons
Extraction|Metals above carbon (e.g. sodium) are extracted by electrolysis; iron by reduction with carbon monoxide
Rate of reaction|Higher temperature, concentration, surface area or a catalyst gives more frequent successful collisions
Surface area|Powder has greater surface area than chips, so more collisions per unit time
Energy change|q = mcΔT; ΔH (kJ/mol) = q ÷ moles ÷ 1000; exothermic is negative
Endothermic and exothermic|Endothermic takes in energy; exothermic gives it out`,
'Tests and inorganic':`Flame tests|Sodium yellow/orange, lithium red, potassium lilac, calcium brick red, copper blue-green
Sulfate test|Add hydrochloric acid, then barium chloride: white precipitate
Halide test|Add nitric acid and silver nitrate: chloride white, bromide cream, iodide yellow
Hydroxide precipitates|NaOH gives Fe³⁺ brown, Fe²⁺ green, Cu²⁺ blue precipitates
Gas tests|Hydrogen: squeaky pop; oxygen: relights glowing splint; carbon dioxide: limewater milky; chlorine: bleaches litmus
Acidic and basic oxides|Non-metal oxides (SiO₂) are acidic; metal oxides (CaO) are basic
Halogens and alkali metals|Halogens (e.g. fluorine, F₂) get less reactive down the group; alkali metals get more reactive
Cu²⁺ ion|2+ charge, formed by loss of two electrons from copper`,
'Organic chemistry':`Alkane|Saturated hydrocarbon, only single bonds, CₙH₂ₙ₊₂ (not alkene)
Alkene|Unsaturated, contains C=C, CₙH₂ₙ; decolourises bromine water immediately
Substitution|Alkane + bromine needs UV light and is slow; forms bromoalkane + HBr
Addition|Alkene adds across C=C; forms dibromo compound
Fractional distillation|Crude oil separated by boiling point; longer chains have higher boiling points
Hexane vs shorter alkanes|Longer chain: stronger intermolecular forces, more energy to overcome
Cracking|600-700 °C with alumina/silica catalyst; makes useful short alkanes and alkenes
Combustion|Complete gives CO₂ and H₂O; incomplete gives carbon or CO, which reduces oxygen transport in blood
Sulfur impurities|Burn to SO₂ which dissolves in rain water forming acid rain
Isomers|Same molecular formula, different structural formula
Poly(chloroethene)|Addition polymer; landfill takes up space for centuries; burning gives toxic HCl
Empirical formula|Divide each % by Ar, then by the smallest, to get the simplest ratio`})};
SJ.phys={n:'Physics',e:'🔭',b:'Edexcel IGCSE Double Award · Physics',u:SJ.sci.u,ex:['Physics papers combine calculation, graph, practical and extended-explanation questions.','No Physics mark scheme was supplied, so this section follows the Edexcel specification areas.'],tech:['Calculations: write the equation, substitute with units, then answer with units. Method marks are given for each step.','Convert units before substituting (g to kg, minutes to seconds, cm to m).','"Explain" questions on forces: state the resultant force, then its effect on motion.','Graphs: gradient and area have meaning (velocity-time gradient = acceleration, area = distance).','Practicals: give the measuring instrument, the variable you change, what you control and how to improve reliability.'],T:L2({
'Forces and motion':`Speed, velocity, acceleration|speed = distance ÷ time; a = (v − u) ÷ t; velocity includes direction
Velocity-time graph|Gradient is acceleration; area is distance
Newton's second law|F = ma; resultant force causes acceleration
Weight|W = mg, with g = 10 N/kg
Terminal velocity|Air resistance equals weight, resultant force is zero, so speed is constant
Stopping distance|Thinking distance + braking distance; speed, tiredness and drugs raise it
Momentum|p = mv; conserved in collisions
Moments|moment = force × perpendicular distance; balanced when clockwise equals anticlockwise
Hooke's law|Extension is proportional to force up to the limit of proportionality`,
'Energy and matter':`Kinetic and gravitational energy|KE = ½mv²; GPE = mgh
Work done and power|W = Fd; P = W ÷ t
Efficiency|useful output ÷ total input × 100
Specific heat capacity|E = mcΔθ; energy to raise 1 kg by 1 °C
Conduction, convection, radiation|Conduction in solids, convection in fluids, radiation needs no medium
Renewable energy|Replaced naturally, e.g. wind, solar, hydroelectric; non-renewable includes coal, oil, gas
Density|ρ = m ÷ V; measure irregular volume by displacement
Gas pressure|pV = constant at fixed temperature; more particle collisions per area raise pressure`,
'Electricity and magnetism':`Current, p.d., resistance|I = Q ÷ t; V = IR; resistance opposes current
Series and parallel|Series: same current, p.d. shared; parallel: same p.d., current splits
I-V graphs|Resistor straight line; filament lamp curves as resistance rises; diode conducts one way
Electrical power|P = IV; energy E = Pt
Mains safety|Live, neutral and earth wires; fuse melts when current is too high
Motor effect|A current-carrying wire in a magnetic field experiences a force (Fleming's left-hand rule)
Electromagnetic induction|A changing magnetic field induces a voltage; used in generators
Transformer|Vp ÷ Vs = Np ÷ Ns; step-up and step-down change p.d.`,
'Waves, radioactivity and space':`Wave equation|v = fλ; transverse waves oscillate at right angles; longitudinal are compressions
Reflection and refraction|Refraction changes speed and direction; total internal reflection beyond the critical angle
Electromagnetic spectrum|Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma: increasing frequency
Alpha, beta, gamma|Alpha stopped by paper, highly ionising; beta by aluminium; gamma reduced by thick lead
Half-life|Time for the activity of a source to halve
Background radiation|Radon, rocks, cosmic rays and medical sources
Nuclear fission|A large nucleus splits releasing energy and neutrons, causing a chain reaction
Space|Red-shift supports an expanding universe from the Big Bang; stars form from nebulae`})};
delete SJ.sci;Object.values(SJ).forEach(s=>s.all=Object.values(s.T).flat());
TH.bio=['#16a34a','#0d9488'];TH.chem=['#7c3aed','#2563eb'];TH.phys=['#ea580c','#dc2626'];
['bio','chem','phys'].forEach(k=>{MK[k]=MK.sci});
WE.bio=['Explain why the glucose solution is boiled and cooled before yeast is added. (2)','Boiling kills microorganisms and removes dissolved oxygen so respiration is anaerobic (1). Cooling prevents the heat killing the yeast (1).'];
WE.chem=['Explain why hexane has a higher boiling point than butane. (3)','Hexane is a larger molecule with a longer chain (1), so there are stronger intermolecular forces (1), which need more energy to overcome (1). Do not mention breaking covalent bonds.'];
WE.phys=['A skydiver reaches terminal velocity. Explain why. (3)','Air resistance increases with speed (1) until it equals the weight (1), so the resultant force is zero and the velocity is constant (1).'];
WQ.bio=[['Adrenaline dilates pupils, increases heart rate, narrows intestinal arteries and converts glycogen to glucose. Explain the advantages of these effects to a person in danger. (5)',['Wider pupils let in more light so they see the danger better','Faster heart rate delivers oxygen and glucose to muscles more quickly','Narrowed arteries to the intestine divert blood to the muscles','Glycogen to glucose gives more fuel for respiration','So muscles release more energy to fight or flee']],['Design an investigation into whether salt affects the ability of amylase to digest starch. (6)',['Same volume and concentration of starch and amylase in each test','Add different salt concentrations, including none','Control temperature with a water bath (about 37 °C) and keep pH the same','Take samples at intervals and add iodine solution','Record time until iodine stays orange-brown (no starch)','Repeat and calculate a mean']],['Suggest how fish gills are adapted for gas exchange. (3)',['Many filaments and lamellae give a large surface area','Thin walls give a short diffusion distance','Rich blood supply maintains the concentration gradient']],['A sucrose solution in a tube closed with a membrane is placed in water. Explain what happens to its level. (3)',['Water moves into the sucrose solution by osmosis','From high to low water potential through a partially permeable membrane','So the level of liquid in the tube rises']],['Explain the role of lymphocytes in the immune response. (3)',['They produce antibodies specific to the pathogen\'s antigen','Antibodies bind to the pathogen and help destroy it','Memory cells give a faster, stronger response if infected again']]];
WQ.chem=[['Explain why hexane has a higher boiling point than butane. (3)',['Hexane is a larger molecule / longer chain','So stronger intermolecular forces between molecules','So more energy is needed to overcome the forces (no mention of breaking covalent bonds)']],['Explain, in terms of structure and bonding, why silicon dioxide has a high melting point. (5)',['Giant covalent structure / lattice','Covalent bonds are strong','A lot of energy needed to break the bonds','3D tetrahedral structure; each silicon atom makes 4 bonds','No layers, so atoms cannot slide (max 5; do not mention intermolecular forces)']],['Explain, in terms of structure, why graphite is soft and conducts electricity. (6)',['Carbon atoms joined by covalent bonds in layers','Each carbon is bonded to three others','Weak forces between layers, so layers slide over each other','Delocalised electrons between the layers','Electrons are free to move so it conducts electricity','Must include the sliding layers and the free-moving electrons for full marks']],['Compare the reactions of ethane and ethene with bromine. (5)',['Ethane: substitution reaction','Ethane: needs ultraviolet light and does not decolourise (or very slowly)','Ethane produces bromoethane and hydrogen bromide','Ethene: addition reaction','Ethene decolourises immediately, producing dibromoethane (max 3 from each)']],['Describe how to show that a solution contains sodium ions and sulfate ions. (5)',['Flame test on the solution','Yellow/orange flame shows sodium','Add hydrochloric acid to the solution','Add barium chloride solution','A white precipitate shows sulfate']],['Calcium carbonate reacts faster as powder than as chips. Explain why. (3)',['The rate of reaction increases','Powder has a greater surface area','So more collisions per unit time']],['Calculate the mass of Fe₂O₃ (Mr 160) needed to make 28 g of iron: Fe₂O₃ + 3CO → 2Fe + 3CO₂ (Ar Fe 56). (3)',['moles Fe = 28 ÷ 56 = 0.5 mol','moles Fe₂O₃ = 0.5 ÷ 2 = 0.25 mol','mass = 0.25 × 160 = 40 g']]];
WQ.phys=[['Describe how to find the density of an irregular solid. (4)',['Measure the mass with a balance','Fill a eureka can and lower the object in','Collect the displaced water in a measuring cylinder as the volume','Density = mass ÷ volume']],['A 120 W heater warms 0.50 kg of water by 15 °C in 300 s. Calculate the specific heat capacity of water. (3)',['Energy = P × t = 120 × 300 = 36 000 J','c = E ÷ (m × Δθ) = 36 000 ÷ (0.5 × 15)','= 4800 J/kg°C']],['Describe an experiment to find how current varies with p.d. for a filament lamp. (4)',['Ammeter in series and voltmeter in parallel with the lamp','Change the p.d. with a variable power supply or resistor','Record current for each p.d. and plot an I-V graph','Curve flattens because resistance rises as the filament heats']],['Describe how alpha, beta and gamma radiation differ. (4)',['Alpha: stopped by paper, highly ionising','Beta: stopped by a few mm of aluminium, moderately ionising','Gamma: reduced by thick lead, weakly ionising','Gamma is the most penetrating']]];
XQ.bio=[['Cells and transport','Which statement about osmosis is correct?|Water moves through a partially permeable membrane from high to low water potential|Solutes move up a concentration gradient|It needs energy from respiration|It only happens in plant cells|Osmosis is the diffusion of water.'],['Human body systems','Which is an adaptation of the alveoli for gas exchange?|Walls one cell thick|A thick muscular wall|A small surface area|No blood supply|Thin walls give a short diffusion distance.'],['Human body systems','Phagocytes differ from lymphocytes because they|engulf pathogens|produce antibodies|carry oxygen|clot the blood|Lymphocytes make antibodies; phagocytes engulf.'],['Plants and respiration','What is the product of anaerobic respiration in yeast?|Ethanol and carbon dioxide|Lactic acid|Water and carbon dioxide|Oxygen and glucose|Yeast ferments glucose to ethanol and CO₂.']];
XQ.chem=[['Reactivity and rusting','Which is the correct order of reactivity, most to least?|Aluminium, zinc, iron, copper|Zinc, aluminium, iron, copper|Copper, iron, zinc, aluminium|Iron, aluminium, zinc, copper|Aluminium is above zinc.'],['Reactivity and rusting','The process of coating iron with zinc to prevent rusting is|galvanising|reduction|oxidation|electrolysis|Galvanising also protects by sacrifice.'],['Organic chemistry','Which test shows a hydrocarbon is an alkene?|Bromine water is decolourised immediately|Limewater turns milky|A glowing splint relights|Litmus is bleached|Alkenes have a C=C double bond.'],['Tests and inorganic','What is seen when sodium hydroxide is added to iron(III) ions?|A brown precipitate|A white precipitate|A blue precipitate|No change|Fe³⁺ forms a brown precipitate.'],['Particles and bonding','Which describes covalent bonding?|Attraction between nuclei and a shared pair of electrons|Transfer of electrons between ions|Positive ions in a sea of electrons|Weak forces between molecules|Covalent bonds are strong.']];
XQ.phys=[['Forces and motion','The gradient of a velocity-time graph gives|acceleration|distance|speed|momentum|Area gives distance.'],['Electricity and magnetism','In a parallel circuit the|p.d. is the same across each branch|current is the same in each branch|resistance adds up|p.d. is shared|Current splits between branches.'],['Waves, radioactivity and space','Which radiation is stopped by a sheet of paper?|Alpha|Beta|Gamma|X-rays|Alpha is highly ionising but least penetrating.'],['Energy and matter','Which is a renewable energy resource?|Wind|Coal|Natural gas|Oil|Wind is replaced naturally.']];
SPEC.bio=SP('Cells, tissues and organs|1;Diffusion, osmosis, active transport|1;Enzymes and digestion|1;Photosynthesis and limiting factors|1;Respiration, aerobic and anaerobic|1;Gas exchange and breathing|1;Circulation, heart and blood|1;Immunity and disease|1;Hormones and homeostasis|1;Nervous system and reflexes|0;Reproduction and inheritance|1;Natural selection and genetic modification|1;Ecosystems, food chains and cycles|1');
SPEC.chem=SP('States of matter and changes of state|1;Atomic structure and isotopes|1;Bonding and structures|1;Moles and calculations|1;Reactivity series and rusting|1;Extraction of metals and electrolysis|1;Rates of reaction|1;Energetics|1;Ion tests and flame tests|1;Periodic table, groups|1;Acids, bases and salts|0;Crude oil, alkanes and cracking|1;Alkenes, polymers and isomers|1');
SPEC.phys=SP('Motion and graphs|1;Newton\'s laws and momentum|1;Energy, work and power|1;Thermal physics and specific heat capacity|1;Density and gas pressure|1;Electricity: circuits and I-V graphs|1;Mains and electrical safety|1;Magnetism and electromagnetic induction|1;Waves and the EM spectrum|1;Radioactivity and half-life|1;Space and the Big Bang|1;Moments and Hooke\'s law|1');
}

/* ===== CONTENT-FIRST QUIZ BANKS (calculations only for Maths and Physics) ===== */
{const CALC=['mat','phys'];
const build=k=>{const S=SJ[k],gn=GN[k];
 if(!CALC.includes(k))GN[k]=[];
 let base=genPool(k);GN[k]=gn;
 base=base.filter(q=>!/^Define:|^Which term or formula|^True or false/.test(q.q));
 if(k==='fr'){let n=0;base=base.filter(q=>q.u!=='Verb forms'||n++<90)}
 const out=[],seen=new Set(),add=q=>{if(q&&new Set(q.o).size===q.o.length&&!seen.has(q.q)){seen.add(q.q);out.push(q)}};
 Object.entries(S.T).forEach(([tp,a])=>{const pl=a.length>=5?a:S.all;a.forEach(([t,d])=>{
  const oth=sh(pl.filter(x=>x[0]!==t&&x[1]!==d));if(oth.length<3)return;const e=`${t}: ${d}`;
  add(mc(tp,`Which ONE of the following is the correct definition of ${t}?`,d,oth.slice(0,3).map(x=>x[1]),e));
  add(mc(tp,`Which term matches this description: \u201c${d}\u201d?`,t,oth.slice(0,3).map(x=>x[0]),e));
  add(mc(tp,`True or false: ${t} \u2014 ${d}`,'True',['False'],e));
  add(mc(tp,`True or false: ${t} \u2014 ${oth[0][1]}`,'False',['True'],`${e}. The statement given describes a different idea.`))})});
 const xq=(XQ[k]||[]).map(([u,x])=>{const a=x.split('|');return mc(u,a[0],a[1],a.slice(2,5),a[5])});
 const sd=new Set();return[...base,...out,...xq].filter(q=>{const z=q.q+'|'+q.o[q.a];if(sd.has(z))return false;sd.add(z);return true})};
Object.keys(SJ).forEach(k=>{PL[k]=build(k)})}

/* ===== PAST-PAPER INFORMED SCIENCE CONTENT + SMARTER QUIZ DRAW ===== */
{const addTerms=(k,tp,txt)=>{const arr=L(txt);SJ[k].T[tp]=[...(SJ[k].T[tp]||[]),...arr];SJ[k].all=Object.values(SJ[k].T).flat();
 arr.forEach(([t,d])=>{const oth=sh(SJ[k].T[tp].filter(x=>x[0]!==t)).slice(0,3);if(oth.length<3)return;PL[k].push(mc(tp,`Which ONE of the following is the correct definition of ${t}?`,d,oth.map(x=>x[1]),`${t}: ${d}`),mc(tp,`Which term matches this description: \u201c${d}\u201d?`,t,oth.map(x=>x[0]),`${t}: ${d}`))})};
const X=(k,rows)=>rows.forEach(r=>{const a=r.split('|');PL[k].push(mc(a[0],a[1],a[2],a.slice(3,6),a[6]))});
addTerms('bio','Ecology and inheritance',`Bioaccumulation|Build-up of a persistent substance in the body, getting more concentrated along a food chain
Biological control|Using a living organism, such as a predator, to control a pest
Test cross|Crossing an unknown dominant individual with a homozygous recessive one to find its genotype
Selective breeding|Choosing parents with desired features and breeding from them over many generations`);
addTerms('bio','Human body systems',`Reflex arc|The pathway of receptor, sensory neurone, relay neurone, motor neurone and effector
Synapse|The gap between two neurones, crossed by chemical neurotransmitters
Adrenaline|Hormone from the adrenal glands that prepares the body for fight or flight
Anaemia|Too few red blood cells or too little haemoglobin, so less oxygen is carried
Placenta|Organ where oxygen, nutrients and waste are exchanged between mother and fetus
Vasectomy|Cutting the sperm ducts so that semen contains no sperm`);
addTerms('bio','Cells and transport',`Water potential|The tendency of water to move, from higher water potential to lower water potential
Partially permeable membrane|A membrane that lets some molecules, such as water, through but not others`);
addTerms('bio','Plants and respiration',`Hydrogen carbonate indicator|Turns from red to yellow when more carbon dioxide is present
Fermentation in yeast|Anaerobic respiration: glucose to ethanol and carbon dioxide, with a little energy released`);
addTerms('chem','Particles and bonding',`Isotopes|Atoms of the same element with the same number of protons but different numbers of neutrons
Relative atomic mass|The weighted average mass of an element's atoms, allowing for the abundance of its isotopes
Delocalised electrons|Electrons free to move between atoms, as in graphite and metals`);
addTerms('chem','Reactions and calculations',`Limiting reactant|The reactant that is used up first and so decides how much product forms
Activation energy|The minimum energy particles need when they collide for a reaction to happen
Empirical formula|The simplest whole-number ratio of atoms of each element in a compound
Thermal decomposition|A substance breaking down into simpler substances when heated`);
addTerms('chem','Organic chemistry',`Fractional distillation|Separating crude oil into fractions by boiling point in a fractionating column
Cracking|Breaking long alkane molecules into shorter alkanes and alkenes using heat and a catalyst
Isomers|Compounds with the same molecular formula but different structural formulae
Saturated hydrocarbon|A hydrocarbon with only single carbon-carbon bonds
Substitution reaction|A reaction where one atom is swapped for another, such as ethane reacting with bromine in UV light`);
addTerms('chem','Tests and inorganic',`Test for iron(II)|Sodium hydroxide solution gives a green precipitate
Test for iron(III)|Sodium hydroxide solution gives a brown precipitate
Test for bromide|Silver nitrate solution with nitric acid gives a cream precipitate
Test for chloride|Silver nitrate solution with nitric acid gives a white precipitate`);
addTerms('phys','Forces and motion',`Gravitational field strength|The force on each kilogram of mass, measured in newtons per kilogram
Elliptical orbit|An oval-shaped orbit, as followed by comets around the Sun`);
addTerms('phys','Waves, radioactivity and space',`Beta decay|A neutron changes into a proton and a fast electron is emitted
Nuclear fission|A large nucleus absorbs a neutron, splits, and releases energy and more neutrons
Chain reaction|Neutrons released by one fission cause further fission events
Control rods|Rods that absorb neutrons to control the rate of fission in a reactor
Law of reflection|The angle of incidence equals the angle of reflection, both measured from the normal`);
addTerms('phys','Electricity and magnetism',`Electromagnetic induction|A voltage is induced when a conductor cuts through magnetic field lines
Alternating current|Current that repeatedly changes direction
Direct current|Current that flows in one direction only`);
addTerms('phys','Energy and matter',`Categoric variable|A variable that has labels rather than numbers, such as the type of metal`);
X('bio',[
`Cells and transport|A potato cylinder is left in a strong sugar solution, then blotted and reweighed. Its mass has dropped. What happened?|Water left the cells by osmosis|Sugar was respired by the cells|Water was pumped out by active transport|Starch was digested|The solution had a lower water potential than the cell sap, so water moved out.`,
`Cells and transport|Why are potato cylinders blotted dry before they are weighed?|Surface liquid would add mass and make the comparison unfair|To start osmosis inside the cells|To sterilise the potato|To remove sugar from inside the cells|Only the change in the potato's own mass should be measured.`,
`Cells and transport|In which solution would a potato cylinder show no overall change in mass?|One with the same water potential as the cell sap|Pure water|The strongest sugar solution|A solution with no dissolved solutes|With no net water movement there is no mass change.`,
`Plants and respiration|A tube of hydrogen carbonate indicator turns from red to yellow. What does this show?|More carbon dioxide is present|Less carbon dioxide is present|More oxygen is present|The pH has become alkaline|Yellow means carbon dioxide has built up, for example from exhaled air.`,
`Plants and respiration|Pondweed is placed under different coloured lights and the oxygen bubbles are counted. What must stay the same for a fair test?|Light intensity, temperature and carbon dioxide level|The colour of the light|The number of bubbles counted|The type of filter used|Only the colour of light should change.`,
`Plants and respiration|Why does bread dough rise when yeast is added and left somewhere warm?|Yeast respires and the carbon dioxide forms bubbles in the dough|Yeast photosynthesises and releases oxygen|Warmth turns starch into gas|Yeast cells swell with water|Carbon dioxide from respiration gets trapped in the dough.`,
`Plants and respiration|Which equation shows anaerobic respiration in yeast?|Glucose to ethanol and carbon dioxide|Glucose to lactic acid|Glucose and oxygen to carbon dioxide and water|Ethanol to glucose and carbon dioxide|Yeast produces ethanol and carbon dioxide, not lactic acid.`,
`Human body systems|Which sequence correctly shows the path of a reflex action?|Receptor, sensory neurone, relay neurone, motor neurone, effector|Receptor, motor neurone, relay neurone, sensory neurone, effector|Effector, sensory neurone, relay neurone, motor neurone, receptor|Receptor, relay neurone, sensory neurone, effector, motor neurone|The stimulus is detected first and the response happens last.`,
`Human body systems|How does a nerve signal cross a synapse?|Neurotransmitter molecules diffuse across the gap|An electrical spark jumps the gap|Hormones travel in the blood|Neurones touch and fuse|Chemical transmission is why signals slow slightly at synapses.`,
`Human body systems|Why does breathing rate rise during exercise?|Muscles respire faster so more oxygen is needed and more carbon dioxide removed|The lungs need to cool down|Red blood cells are used up|The heart stops pumping oxygen|Faster respiration raises demand for gas exchange.`,
`Human body systems|A person has anaemia. Which symptom is most likely?|Tiredness and breathlessness|A high temperature|Very fast reflexes|Swollen muscles|Fewer red blood cells means less oxygen reaches the muscles.`,
`Human body systems|Which white blood cell makes antibodies?|Lymphocyte|Red blood cell|Platelet|Neutrophil|Lymphocytes produce antibodies; neutrophils and monocytes carry out phagocytosis.`,
`Human body systems|Which set of effects does adrenaline cause?|Faster heart rate, more glucose in the blood, wider pupils|Slower heart rate, less glucose, narrower pupils|More blood to the intestines, slower breathing|Lower blood pressure, relaxed muscles|It prepares the body for fight or flight.`,
`Human body systems|Why is the placenta thin with a large surface area?|So oxygen and nutrients diffuse in and waste diffuses out quickly|So the mother's and baby's blood can mix|So it can digest food for the baby|So it can store blood for later|The two blood supplies stay separate, with exchange by diffusion.`,
`Human body systems|Why is a vasectomy an effective method of contraception?|The sperm ducts are cut so no sperm enter the semen|The testes are removed|Eggs are blocked from leaving the ovary|Semen can no longer be produced|Sperm cannot reach the urethra, so fertilisation cannot happen.`,
`Ecology and inheritance|Leaves are sprayed with a pesticide that is not broken down. The food chain is leaves, caterpillar, blackbird, sparrowhawk. Which organism ends up with the highest concentration?|Sparrowhawk|Leaves|Caterpillar|Blackbird|Bioaccumulation concentrates the chemical at each level.`,
`Ecology and inheritance|Gardeners release ladybirds to eat greenfly. What is this called?|Biological control|Selective breeding|Genetic engineering|Bioaccumulation|A natural predator is used to reduce the pest.`,
`Ecology and inheritance|Two heterozygous short-haired guinea pigs (Ss, short dominant) are crossed. What fraction of offspring should be long-haired?|One quarter|One half|Three quarters|None|Only the ss offspring are long-haired.`,
`Ecology and inheritance|How can you tell whether a short-haired guinea pig is SS or Ss?|Cross it with a long-haired ss one and study the offspring|Cross it with an SS one|Measure its hair length|Wait for it to have one litter of any kind|Any long-haired offspring would show it carries s.`,
`Ecology and inheritance|A mutation makes some animals harder for predators to see. How could this allele become common?|They survive, breed and pass the allele to offspring|They choose to pass it on|Every offspring mutates in the same way|Predators change the allele|This is natural selection acting on variation.`,
`Ecology and inheritance|Breeders want cows with higher milk yield. What is the correct method?|Breed from the best milk producers over many generations|Expose the cows to radiation|Give each calf extra hormones|Breed from the largest bulls only|Selective breeding repeats choosing the best parents.`]);
X('chem',[
`Particles and bonding|Why does a liquid evaporate faster when it is warmed?|More particles have enough energy to escape the surface|The bonds inside molecules break|The particles become larger|The liquid becomes denser|Higher energy lets more particles overcome the forces holding them together.`,
`Particles and bonding|Water vapour turns to liquid water on a cold window. What is this called?|Condensation|Evaporation|Sublimation|Freezing|Gas changing to liquid is condensation.`,
`Particles and bonding|Two atoms of boron both have 5 protons but different mass numbers. What differs?|The number of neutrons|The number of protons|The number of electrons|The atomic number|They are isotopes of the same element.`,
`Particles and bonding|Why does diamond have a very high melting point?|Many strong covalent bonds in a giant lattice must be broken|Weak forces between molecules hold it together|It contains ions|It has delocalised electrons|Lots of energy is needed to break the covalent bonds.`,
`Particles and bonding|Why can graphite conduct electricity but diamond cannot?|Graphite has delocalised electrons that can move|Graphite contains ions|Graphite atoms move freely|Diamond is a liquid|Each carbon in graphite has one spare electron that is free to move.`,
`Particles and bonding|What holds the atoms together in a covalent bond?|Attraction between the nuclei and a shared pair of electrons|Attraction between positive and negative ions|Attraction between delocalised electrons and ions|Forces between separate molecules|Both nuclei are attracted to the shared electrons.`,
`Reactions and calculations|A gas is collected during a reaction. The volume levels off. Why?|The limiting reactant has been used up|The catalyst has been used up|The gas is dissolving|The temperature has dropped|No more product forms once one reactant has run out.`,
`Reactions and calculations|Why does a more dilute acid react more slowly?|Fewer particles per volume, so fewer collisions each second|The particles have less kinetic energy|The activation energy is higher|The particles are larger|Particle energy is unchanged, collisions are less frequent.`,
`Reactions and calculations|How does a catalyst speed up a reaction?|It gives an alternative route with a lower activation energy|It raises the temperature|It increases the concentration|It is used up in the reaction|A catalyst is not used up.`,
`Reactions and calculations|Zinc is added to nitric acid until no more reacts, leaving some solid. Why is the mixture filtered?|To remove the excess zinc|To remove the water|To make the acid stronger|To cool the solution|Only the salt solution should go forward to crystallisation.`,
`Reactions and calculations|How do you get crystals of a salt from its solution without evaporating to dryness?|Evaporate some water, leave to cool, filter off the crystals and dry them|Boil it until all the water has gone|Freeze it solid|Add more acid and filter|Stopping at the crystallisation point gives better crystals.`,
`Reactions and calculations|How can you show that a solid has been heated until the reaction is complete?|Heat, cool and reweigh until the mass stops changing|Heat it once for five minutes|Stop when it changes colour|Stop when it stops bubbling|Constant mass shows no more change is happening.`,
`Reactions and calculations|Green copper carbonate is heated and breaks down. What colour change is seen?|Green to black|Blue to white|Green to blue|Black to green|Copper carbonate decomposes to black copper oxide and carbon dioxide.`,
`Tests and inorganic|Sodium hydroxide solution gives a green precipitate. Which ion is present?|Iron(II)|Iron(III)|Copper(II)|Zinc|Iron(III) is brown, copper(II) is blue and zinc is white.`,
`Tests and inorganic|Silver nitrate and nitric acid give a cream precipitate. Which ion is present?|Bromide|Chloride|Iodide|Carbonate|Chloride is white and iodide is yellow.`,
`Tests and inorganic|A glowing splint relights in a test tube of gas. Which gas is it?|Oxygen|Hydrogen|Carbon dioxide|Nitrogen|Oxygen relights a glowing splint.`,
`Tests and inorganic|Hydrogen is passed over a heated metal oxide. Why must it keep flowing while the tube cools?|To stop air getting in and re-oxidising the metal|To keep the metal hot|To make more water|To dilute the oxide|Hot metal reacts with oxygen again.`,
`Organic chemistry|Crude oil is separated by fractional distillation because its fractions differ in what?|Boiling point|Colour|Solubility|Reactivity with water|Each hydrocarbon boils at a different temperature.`,
`Organic chemistry|Why do fractions with longer hydrocarbon chains have higher boiling points?|Stronger intermolecular forces need more energy to overcome|Their covalent bonds are stronger|They contain oxygen|They are lighter|The covalent bonds do not break when boiling.`,
`Organic chemistry|Cracking a long alkane gives which products?|A shorter alkane and an alkene|Two longer alkanes|Only carbon dioxide and water|A polymer and water|Cracking breaks long chains into smaller, more useful ones.`,
`Organic chemistry|What happens when ethene and ethane are each shaken with bromine water?|Ethene decolourises it and ethane does not|Ethane decolourises it and ethene does not|Both turn colourless|Neither changes|The double bond in ethene reacts with bromine.`,
`Organic chemistry|Ethane reacts with bromine in UV light to form bromoethane and hydrogen bromide. What type of reaction is this?|Substitution|Addition|Polymerisation|Neutralisation|A hydrogen atom has been swapped for a bromine atom.`,
`Organic chemistry|Butane and methylpropane have the same molecular formula but different structures. What are they?|Isomers|Isotopes|Allotropes|Polymers|Same formula, different arrangement.`,
`Reactivity and rusting|Zinc is placed in copper sulfate solution. What do you see?|The solution fades and copper forms|The zinc stays unchanged|The solution turns darker blue|A white precipitate forms|Zinc is more reactive, so it displaces copper.`]);
X('phys',[
`Forces and motion|What is the unit of gravitational field strength?|Newton per kilogram|Kilogram|Newton|Joule per second|It is the force on each kilogram.`,
`Forces and motion|Why is gravitational field strength on the Moon less than on Earth?|The Moon has less mass|The Moon has no atmosphere|The Moon is nearer the Sun|The Moon is made of lighter rock|Smaller mass gives a weaker field.`,
`Forces and motion|How does a comet's orbit differ from a moon's?|It is very elliptical and its speed changes a lot|It is a perfect circle|It does not orbit|It orbits a planet|A comet speeds up near the Sun.`,
`Forces and motion|What does the gradient of a velocity-time graph give?|Acceleration|Distance|Speed|Displacement|The area under the line gives distance.`,
`Energy and matter|Why do pans often have wooden or plastic handles?|They are insulators so the handle stays cooler|They are lighter than metal|They are stronger than metal|They reflect heat|Wood is a poor conductor of heat.`,
`Energy and matter|How is thermal energy conducted along a metal rod?|Vibrating particles and free electrons pass it along|The rod expands|Hot air rises along it|Radiation passes through the metal|Free electrons make metals especially good conductors.`,
`Energy and matter|In a test of copper, iron and brass rods, the type of metal is what kind of variable?|Categoric|Continuous|Dependent|Control|It has labels, not numbers.`,
`Energy and matter|How can a student make their results more reliable?|Repeat the measurements and calculate a mean|Use one trial only|Change several variables|Ignore anomalies|Repeats show consistency and reveal anomalies.`,
`Energy and matter|A marble is lifted and rolls down a track. Which energy transfer happens?|Gravitational to kinetic, with some thermal losses|Kinetic to gravitational|Chemical to nuclear|Thermal to gravitational|Some energy is lost as heat and sound.`,
`Energy and matter|A gas in a sealed rigid container is heated. Why does the pressure rise?|Particles hit the walls more often and with more force|The particles get bigger|There are more particles|The container shrinks|Faster particles collide with the walls harder and more often.`,
`Energy and matter|Which factors decide the pressure at the bottom of a liquid?|Depth, density and gravitational field strength|Width and temperature|Colour and volume|Area and mass of the container|The equation is pressure = height x density x g.`,
`Electricity and magnetism|Which component's resistance falls as light gets brighter?|LDR|Diode|Filament lamp|Fixed resistor|An LDR is a light dependent resistor.`,
`Electricity and magnetism|What does a current in a wire produce?|A magnetic field around the wire|A gravitational field|A static charge|Sound waves|This is the basis of electromagnets and motors.`,
`Electricity and magnetism|What is the difference between a.c. and d.c.?|A.c. repeatedly changes direction and d.c. flows one way|A.c. is for batteries and d.c. for mains|A.c. is always larger|D.c. is always larger|Direction of flow is the difference.`,
`Electricity and magnetism|A resistor is added in parallel across a battery. What happens to the current through the battery?|It increases|It decreases|It stays the same|It stops|A new path lowers the total resistance.`,
`Electricity and magnetism|Why does a generator produce a voltage?|Coils cut through magnetic field lines as they rotate|Electrons flow from the magnets|The wire is heated|Gravity pulls the charges|Cutting field lines induces a voltage.`,
`Waves, radioactivity and space|Why can microwaves be harmful to people?|They heat the body tissue internally|They are always ionising|They make bones magnetic|They change the genes|They are absorbed and warm the tissue.`,
`Waves, radioactivity and space|Which has a longer wavelength than X-rays?|Visible light|Gamma rays|Neither is longer|Cosmic rays|Visible light has a longer wavelength than X-rays.`,
`Waves, radioactivity and space|In a ray diagram, from which line are the angles of incidence and reflection measured?|The normal|The mirror surface|The incident ray|The horizontal|The normal is at 90 degrees to the surface.`,
`Waves, radioactivity and space|What happens to a nucleus in beta-minus decay?|A neutron becomes a proton and an electron is emitted|A proton becomes a neutron|It loses two protons and two neutrons|It absorbs a neutron|The proton number goes up by one.`,
`Waves, radioactivity and space|Why might wood from the 1960s look younger than it really is by carbon-14 dating?|Extra carbon-14 was in the atmosphere so it contains more than expected|Wood loses carbon-14 over time|Carbon-14 is not radioactive|The wood is wet|More carbon-14 makes the sample look like it has decayed less.`,
`Waves, radioactivity and space|Which statement describes a chain reaction in a nuclear reactor?|Neutrons from one fission cause more fissions|A nucleus splits without a neutron|Electrons collide with a nucleus|Daughter nuclei split again|Each fission releases neutrons.`,
`Waves, radioactivity and space|What do the control rods in a reactor do?|Absorb neutrons to slow the fission rate|Heat the water|Produce more neutrons|Cool the steam|Lowering the rods slows the reaction.`]);
sjStart=function(){const k=sj.k,P=pool(k).filter(x=>sj2.qt==='All'||x.u===sj2.qt),TR=/^(Which ONE of the following is the correct definition|Which term matches this description|True or false:)/,TF=/^True or false/;
 let seen=[];try{seen=JSON.parse(localStorage.getItem('sjb_seen_'+k))||[]}catch(e){}const ss=new Set(seen),cand=sh(P),sc=new Map(cand.map(q=>[q,(ss.has(q.q.slice(0,70))?2:0)+(TF.test(q.q)?1:0)+(TR.test(q.q)?0:-1)+Math.random()*.9]));
 cand.sort((a,b)=>sc.get(a)-sc.get(b));const used=new Set(),out=[],n=sj2.ql;for(const q of cand){const g=(q.e||q.q).slice(0,34);if(used.has(g))continue;used.add(g);out.push(q);if(out.length>=n)break}
 for(const q of cand){if(out.length>=n)break;if(!out.includes(q))out.push(q)}
 const l=sh(out).map(q=>({...q,p:undefined}));try{localStorage.setItem('sjb_seen_'+k,JSON.stringify([...seen,...l.map(q=>q.q.slice(0,70))].slice(-500)))}catch(e){}
 sj.q={l,i:0,s:0};sjDraw()}}

/* ===== RS (Judaism + Christianity) and GEOGRAPHY from AQA mark schemes ===== */
{const addTerms=(k,tp,txt)=>{const arr=L(txt);SJ[k].T[tp]=[...(SJ[k].T[tp]||[]),...arr];SJ[k].all=Object.values(SJ[k].T).flat();
 arr.forEach(([t,d])=>{const oth=sh(SJ[k].T[tp].filter(x=>x[0]!==t)).slice(0,3);if(oth.length<3)return;PL[k].push(mc(tp,`Which ONE of the following is the correct definition of ${t}?`,d,oth.map(x=>x[1]),`${t}: ${d}`),mc(tp,`Which term matches this description: \u201c${d}\u201d?`,t,oth.map(x=>x[0]),`${t}: ${d}`))})};
const X=(k,rows)=>rows.forEach(r=>{const a=r.split('|');PL[k].push(mc(a[0],a[1],a[2],a.slice(3,6),a[6]))});
const ISL=/Islam|Muslim|Allah|Makkah|Mecca|Qur|Muhammad|Tawhid|Risalah|Akhirah|Salah|Sawm|Zakat|Hajj|Shahada|Ummah|Jihad|mosque|Imam|Ramadan|\bEid\b|Sunni|Shia/i;
Object.keys(SJ.rs.T).forEach(t=>{SJ.rs.T[t]=SJ.rs.T[t].filter(([a,b])=>!ISL.test(a+' '+b))});SJ.rs.all=Object.values(SJ.rs.T).flat();
PL.rs=PL.rs.filter(q=>!ISL.test(q.q+' '+q.o.join(' ')+' '+(q.e||'')));
addTerms('rs','Judaism: beliefs',`Shekhinah|The divine presence of God
Covenant|A binding agreement between God and the Jewish people, made with figures such as Abraham and Moses
Mitzvot|The commandments in the Torah, 613 in total, that Jews are expected to keep
Tzedakah|Charity and giving to those in need, seen as a duty and a way of bringing justice
Pikuach Nefesh|The duty to save a life, which overrides most other laws
Olam Haba|The world to come, where the righteous live on with God
Sheol|A dark, shadowy place where souls wait, described in the Tenakh
Gan Eden|The Garden of Eden, a place of reward for the righteous
Gehinnom|A place where souls are purified after death before they can enter Gan Eden
Gilgul|The belief held by some Jews that souls are reincarnated
Messianic Age|A future time of peace and justice when the Messiah comes
Tikkun olam|Repairing or healing the world through good deeds`);
addTerms('rs','Judaism: practices',`Brit Milah|The circumcision of Jewish baby boys, a sign of the covenant
Aron Hakodesh|The Ark in a synagogue that holds the Torah scrolls
Bimah|The raised platform in a synagogue from which the Torah is read
Ner Tamid|The everlasting light that hangs above the Ark
Yad|A pointer used to follow the text when reading the Torah scroll
Mezuzah|A small case on a doorpost containing the words of the Shema
Minyan|A group of ten adult Jews needed for certain prayers
Shofar|A ram's horn blown at Rosh Hashanah
Tashlich|A custom of casting breadcrumbs into water to symbolise letting go of sins
Yamim Noraim|The Days of Awe between Rosh Hashanah and Yom Kippur
Talmud|The record of rabbinic discussion of the law, made up of the Mishnah and the Gemara
Mishnah|The first part of the Talmud, explaining how to apply the commandments
Gemara|The second part of the Talmud, later rabbis' commentary on the Mishnah
Tenakh|The Jewish Bible, made up of the Torah, Nevi'im and Ketuvim
Shema|The central Jewish prayer declaring that God is one`);
addTerms('rs','Christianity: beliefs',`Incarnation|God becoming human in Jesus Christ
Crucifixion|The death of Jesus on the cross
Ascension|Jesus returning to heaven forty days after the resurrection
Original sin|The idea that all humans inherit the sinfulness that began with Adam and Eve
Pentecost|The coming of the Holy Spirit on the disciples as tongues of fire
Fruit of the Spirit|Qualities such as love, joy and kindness that Christians believe the Holy Spirit produces
Moral evil|Evil and suffering caused by human actions
Natural evil|Suffering with natural causes, such as earthquakes and disease
Free will defence|The argument that evil exists because God gave humans the freedom to choose wrongly
Soul-making|The idea that suffering helps people to grow spiritually
Hell|A place or state of eternal separation from God`);
addTerms('rs','Christianity: practices',`Evangelism|Spreading Christian beliefs to others
Great Commission|Jesus' command to spread the gospel and baptise people in all nations
Pilgrimage|A journey to a holy place for spiritual renewal, such as Lourdes, Iona or the Holy Land
Rosary|A string of beads used to focus private prayer on the life of Jesus
Reconciliation|Restoring a relationship, for example between a person and God after sin
Private worship|Worship done alone, such as meditation, Bible reading or silent prayer`);
addTerms('rs','Exam technique',`Developed explanation|A point that is extended with detail, an example or a source, so it earns a second mark
Source of authority|A sacred text or teaching, such as the Torah, Talmud, Bible or a Church leader, used to support a point
Evaluation|Weighing up arguments for and against a statement, then reaching a justified conclusion`);
X('rs',[
`Judaism: beliefs|Which term means the divine presence of God?|Shekhinah|Mitzvot|Pikuach Nefesh|Talmud|Shekhinah is God's presence, which Jews believe is felt when people gather to pray or study.`,
`Judaism: beliefs|Which pair of people did Jews believe God made covenants with?|Abraham and Moses|Pilate and Herod|Peter and Paul|Rashi and Maimonides|Covenants with Abraham and Moses are central to Jewish identity.`,
`Judaism: beliefs|How does belief in tzedakah influence many Jewish families?|They keep a box at home to save money for charity|They pay no tax|They avoid all contact with non-Jews|They give up work on weekdays|Tzedakah means charity and justice, and giving is a duty, not an option.`,
`Judaism: beliefs|What does Pikuach Nefesh teach?|Saving a life takes priority over most other laws|Shabbat must never be broken in any case|Ten percent of income must be given away|Only kosher food may be eaten|It allows Jews to break Shabbat to save a life.`,
`Judaism: beliefs|What is Olam Haba?|The world to come, where the righteous live on with God|The place where souls are destroyed|A festival of new beginnings|A synagogue service for the dead|Many Jews believe in a future world of reward.`,
`Judaism: beliefs|Which belief about the end of time is held by many Orthodox Jews?|The dead will be raised in bodily resurrection|The soul dies with the body|Everyone is reincarnated at once|Only the Messiah will live again|This is one reason burial is the norm.`,
`Judaism: beliefs|Why do many non-Orthodox Jews accept cremation?|They believe in the immortality of the soul rather than bodily resurrection|They reject all Jewish law|They believe the body must be preserved|They think the body is holy|The soul is seen as the lasting part of a person.`,
`Judaism: beliefs|What do some Jews who believe in gilgul think happens after death?|Souls are reincarnated so they can continue to heal the world|Souls go straight to a final judgement with no return|The soul stays in the grave|Souls become angels|Gilgul is the transmigration of souls.`,
`Judaism: beliefs|Which festival celebrates the creation of the world?|Rosh Hashanah|Purim|Chanukah|Tu x|Rosh Hashanah is the Jewish New Year and the birthday of the world.`,
`Judaism: beliefs|What does the Shema declare?|That God is one|That the Messiah has come|That Shabbat is over|That all Jews must pray three times a day|It is the central statement of Jewish monotheism.`,
`Judaism: practices|Which life event is associated with Brit Milah?|Birth|Coming of age|Marriage|Death|Baby boys are circumcised as a sign of the covenant.`,
`Judaism: practices|Which of these is a religious feature of a synagogue?|The Ner Tamid above the Ark|A baptismal font|A crucifix|A confessional box|The everlasting light symbolises God's constant presence.`,
`Judaism: practices|What is the purpose of the shofar at Rosh Hashanah?|Its blasts remind Jews to mend their ways and return to God|It marks the end of Shabbat|It signals the start of a wedding|It announces the harvest|Its sound calls Jews to reflect and repent.`,
`Judaism: practices|What does the custom of tashlich symbolise?|Letting go of sins by casting breadcrumbs into water|Sharing bread with the poor|Remembering the exodus|Blessing a new house|It is linked to the idea that God casts sins into the depths of the sea.`,
`Judaism: practices|Why do many Jews dip apples in honey at Rosh Hashanah?|To wish for a sweet new year|To remember the plagues|To mark the end of a fast|To bless the Torah|The sweetness stands for hopes for the year ahead.`,
`Judaism: practices|What are the two parts of the Talmud?|The Mishnah and the Gemara|The Torah and the Tenakh|The Siddur and the Haggadah|The Shema and the Amidah|The Mishnah applies the commandments and the Gemara comments on it.`,
`Judaism: practices|Why is the Talmud important to Jews?|It explains and applies the Torah to new situations|It replaces the Torah|It only contains stories|It is written by one author|It records centuries of debate on how to keep the law.`,
`Judaism: practices|Which point best supports the view that Jews need not always worship in a synagogue?|God is everywhere and private prayer at home is acceptable|Only a rabbi may pray|Prayer only counts on Shabbat|Prayer is forbidden outside the synagogue|Jews pray three times a day, often at home or work.`,
`Judaism: practices|Why is a minyan important in synagogue worship?|Certain prayers can only be said with ten adults present|It decides who is the rabbi|It marks the start of Shabbat|It is a special meal|Many communal prayers require a quorum.`,
`Christianity: beliefs|Which event refers to the death of Jesus?|Crucifixion|Ascension|Incarnation|Resurrection|The crucifixion is the death of Jesus on the cross.`,
`Christianity: beliefs|What happened at Pentecost?|The Holy Spirit came on the disciples as tongues of fire|Jesus rose from the dead|Jesus was baptised|Jesus was born|It empowered the early Church to continue Jesus' ministry.`,
`Christianity: beliefs|Why is Jesus called the Lamb of God?|His death is seen as the ultimate sacrifice that takes away sin|He was a shepherd|He was born in a stable|He fed the crowds|The title links his death to atonement.`,
`Christianity: beliefs|Which of these is a fruit of the Spirit?|Kindness|Wealth|Power|Fame|Galatians 5 lists love, joy, kindness and other qualities.`,
`Christianity: beliefs|What is moral evil?|Evil and suffering caused by human actions|Suffering from earthquakes|Suffering caused by the devil only|Suffering that is not real|Natural evil has natural causes, moral evil comes from people.`,
`Christianity: beliefs|Which is an example of natural evil?|A tsunami|A robbery|A war|A lie|Natural evil is suffering not caused by human choices.`,
`Christianity: beliefs|What does the free will defence argue?|Evil exists because humans are free to choose wrongly|God is not all-powerful|Evil is an illusion|Suffering is punishment for every individual|Real freedom makes evil possible.`,
`Christianity: beliefs|Which idea suggests suffering helps people grow spiritually?|Soul-making|Original sin|Evangelism|Transubstantiation|Some Christians say a perfect world would give no chance to develop goodness.`,
`Christianity: beliefs|Which Bible account do many Christians use to explain how evil entered the world?|Adam and Eve in Genesis|The Sermon on the Mount|The Last Supper|The Road to Emmaus|The Fall is linked to human disobedience.`,
`Christianity: beliefs|What does John 3:16 teach about salvation?|Faith in Jesus leads to eternal life|Salvation is earned by money|Only priests can be saved|Salvation is not possible|It says whoever believes in him will not perish.`,
`Christianity: practices|Which term describes spreading Christian beliefs?|Evangelism|Persecution|Reconciliation|Sacrament|Evangelism follows the Great Commission.`,
`Christianity: practices|Which of these is a purpose of baptism?|To join the Church and begin a new Christian life|To pay for a church building|To mark a marriage|To forgive a crime in court|Baptism is initiation and a sign of cleansing from sin.`,
`Christianity: practices|What is the Rosary used for?|Private prayer that focuses on the life of Jesus|Collecting money|Marking time in a service|Blessing water|Beads help keep count of set prayers.`,
`Christianity: practices|Why might a Christian go on pilgrimage to Lourdes?|To pray for healing and spiritual renewal|To get a qualification|To join the army|To escape tax|Lourdes is linked with healing.`,
`Christianity: practices|Which argument supports the view that helping the local community is not the Church's most important role?|Worship and sacraments nurture people's faith|Jesus never helped people|The Church has no members|Charity is forbidden|Many Christians see worship as the core purpose.`,
`Christianity: practices|Which of these is a form of private worship?|Meditating on a candle or reading the Bible alone|Attending Sunday Mass|Taking part in a baptism|Singing hymns in church|Private worship happens outside set public services.`,
`Exam technique|In a 12-mark evaluation answer, which is needed to reach the top level?|Reasoned arguments for different views, religious teaching and a justified conclusion|A long list of facts|Only one point of view|A personal story|The top level needs reasoned judgement supported by religion.`,
`Exam technique|In an 'Explain two' question, how do you earn the second mark for each point?|Develop it with extra detail or an example|Repeat it in different words|Write more points|Add a quote only|A detailed explanation includes the influence, belief or reason.`,
`Exam technique|What is needed for the last mark in a five-mark belief question?|A relevant source of authority such as scripture or teaching|A personal opinion|A diagram|A second conclusion|You must refer to sacred writing or another source.`]);
addTerms('geo','Tectonic hazards',`Plate margin|The boundary where two tectonic plates meet
Conservative margin|Plates slide past each other, causing earthquakes
Geothermal energy|Energy from heat inside the Earth, used in places such as Iceland
Pyroclastic flow|A fast cloud of hot gas, ash and rock from a volcano
Tsunami|A large sea wave caused by an earthquake or eruption under the sea
Primary effects|The immediate impacts of a hazard, such as collapsed buildings
Secondary effects|Later impacts of a hazard, such as fires, disease or lost jobs`);
addTerms('geo','Rainforests',`Biodiversity|The variety of plants and animals in an area
Deforestation|Clearing forest for farming, logging, mining or roads
Debt reduction|Lowering a country's debts so it does not have to clear forest to earn money
Sustainable management|Using a resource so that today's needs are met without harming the future
Selective logging|Cutting only some trees and replanting so the forest can recover`);
addTerms('geo','Rivers, glaciers and coasts',`Meander|A winding bend in a river
Ox-bow lake|A curved lake left when a river breaks through the neck of a meander
Lateral erosion|Sideways erosion of a river's banks
Slip-off slope|The gentle slope on the inside of a bend where material is deposited
Hanging valley|A shallow valley left high above the main glacial trough after the ice melts
Plucking|Ice freezing to rock and tearing pieces away as it moves
Abrasion|Rock carried in ice scraping the valley floor and sides
Hard engineering|Built structures such as dams and embankments used to control floods
Soft engineering|Working with nature to reduce flooding, such as floodplain zoning or planting trees
Mass movement|The downhill movement of material, such as landslides, rockfalls and slumping
Longshore drift|The zigzag movement of sediment along a coast by waves`);
addTerms('geo','Urban issues',`Rural-urban migration|The movement of people from the countryside to cities
Urban sprawl|The uncontrolled spread of a city into surrounding countryside
Commuter settlement|A town or village where many residents travel to work in a city
Park and ride|Car parks on the edge of a city linked by bus to the centre to cut congestion
Green space|Parks and open land that improve air, health and wildlife in cities`);
addTerms('geo','Development',`Uneven development|Differences in wealth and quality of life between places
Gross national income|The total income of a country, including money earned abroad
Newly emerging economy|A country with rapid industrial growth and rising incomes
Aid|Money, goods or expertise given by one country or organisation to another
Trade bloc|A group of countries that trade freely with each other, such as the EU`);
addTerms('geo','Resources',`Food insecurity|When people cannot get enough safe, nutritious food
Water insecurity|Lack of reliable access to enough safe water
Energy insecurity|Lack of reliable and affordable energy supplies
Water deficit|Where demand for water is greater than the supply
Water transfer|Moving water from areas of surplus to areas of deficit
Food miles|The distance food travels from where it is grown to where it is eaten`);
X('geo',[
`Tectonic hazards|Which is an advantage of living near a volcano?|Geothermal energy can be generated|Pyroclastic flows|Ash covering farmland|Lava destroying habitats|Heat from underground is used for electricity in Iceland and New Zealand.`,
`Tectonic hazards|Why do earthquakes happen at a conservative plate margin?|Plates slide past each other, stick, then suddenly release|Plates move apart and magma rises|One plate sinks under another|Plates collide to form fold mountains|Pressure builds up until the plates jolt past each other.`,
`Tectonic hazards|Which is a secondary effect of an earthquake?|Fires from broken gas mains|Buildings collapsing|Ground shaking|Bridges cracking|Secondary effects follow the initial shaking.`,
`Tectonic hazards|Why might poorer people still live near an active volcano?|They cannot afford to move away and rely on local jobs and family|Volcanoes are never dangerous|There are no other houses|The government forces them|People often judge the risk to be low and the benefits high.`,
`Tectonic hazards|How do surface winds relate to air pressure?|Air flows from high pressure towards low pressure|Air flows from low to high pressure|Winds blow in circles with no pattern|Winds only blow over land|The bigger the pressure difference, the stronger the wind.`,
`Rainforests|Why do tropical rainforests have such high biodiversity?|A warm, wet climate all year and many different habitats|Cold winters|Very little sunlight|Few plant species|Constant warmth and rain support many species.`,
`Rainforests|Why is biodiversity low in very cold or very hot dry areas?|Extreme temperatures and lack of water mean few species can survive|They have too many predators|They are too crowded|They have rich soil|Harsh conditions limit which species can live there.`,
`Rainforests|How can debt reduction help protect rainforests?|The country no longer needs to clear forest for cash crops or timber to repay debt|It lets the country build more roads|It increases logging|It stops all farming|Less pressure to earn money from the forest.`,
`Rainforests|Which is a sustainable way to manage a rainforest?|Selective logging with replanting|Clear-felling all the trees|Burning the forest for farmland|Building roads everywhere|Cutting some trees and replanting lets the forest recover.`,
`Rivers, glaciers and coasts|How does an ox-bow lake form?|A river breaks through the neck of a meander in a flood and deposition cuts off the old bend|A glacier melts and fills a hollow|Waves erode a headland|Wind blows sand into a ring|The river takes the shorter route and the old meander is sealed off.`,
`Rivers, glaciers and coasts|Where is erosion strongest on a meander?|The outer bend|The inner bend|The river source only|The river mouth only|Faster flow on the outside undercuts the bank and forms a river cliff.`,
`Rivers, glaciers and coasts|How does a hanging valley form?|A small tributary glacier cuts a shallower valley than the main glacier|A river cuts down through hard rock|Waves cut a cliff|Wind erodes a hill|When the ice melts, the smaller valley is left high above the trough.`,
`Rivers, glaciers and coasts|Which glacial process involves rocks in the ice scraping the valley floor like sandpaper?|Abrasion|Plucking|Attrition|Hydraulic action|Plucking tears rock away, abrasion scrapes it.`,
`Rivers, glaciers and coasts|Which is an example of hard engineering to manage flooding?|Building a dam|Planting trees upstream|Floodplain zoning|Flood warnings|Hard engineering uses built structures.`,
`Rivers, glaciers and coasts|Which is a soft engineering flood strategy?|Floodplain zoning|Building concrete walls|Building a dam|Straightening the channel|Soft engineering works with the river and its natural processes.`,
`Rivers, glaciers and coasts|Which of these is a type of mass movement on a cliff?|Rockfall|Longshore drift|Hydraulic action|Attrition|Material moves downhill under gravity.`,
`Urban issues|Why is air pollution often highest at rush hour?|Many vehicles are on the roads at the same time|Factories close|Fewer people travel|Rain washes the air clean|Traffic emissions peak with commuter journeys.`,
`Urban issues|Which is an effect of urban sprawl and commuter settlements?|Loss of countryside and more commuter traffic|A smaller city|Less demand for housing|No change to transport|Cities spread outwards onto greenfield land.`,
`Urban issues|Why is creating green space important for a sustainable city?|It cleans the air, cools the city and gives people space for health and wildlife|It increases traffic|It reduces biodiversity|It raises pollution|Green space improves environment and wellbeing.`,
`Urban issues|How does a park and ride scheme help a city?|It reduces traffic and congestion in the centre|It adds more cars to the centre|It closes public transport|It raises house prices|Drivers switch to buses at the edge of the city.`,
`Development|How can uneven development cause international migration?|People move from poorer places to richer ones for jobs and better services|Rich countries pay people to stay|Migration only happens within cities|It makes borders disappear|Push and pull factors drive people between countries.`,
`Development|Which is a criticism of aid as a way to reduce the development gap?|It can create dependency or fail to reach those in need|It always works|It reduces trade|It never helps|Aid does not always address the causes of poverty.`,
`Development|Which of these is an example of a trade bloc?|The European Union|The United Nations|The Red Cross|The Olympic Committee|Members trade freely with each other.`,
`Resources|Which action can cut the carbon footprint of food?|Buying local, seasonal produce|Flying in out-of-season fruit|Buying heavily packaged goods|Wasting more food|Fewer food miles means fewer emissions.`,
`Resources|Why is water transferred within the UK?|From areas of surplus in the north and west to areas of deficit in the south and east|From the south to the north|Because there is too much rain in the south east|To increase flooding|Demand is highest where rainfall is lowest.`,
`Resources|Which is an economic effect of water insecurity?|Farmers cannot irrigate, so crop yields and incomes fall|More leisure time|Cheaper food|Lower disease|Less water reduces production and income.`,
`Resources|Which is a social effect of food insecurity?|Malnutrition and poor health|Higher company profits|More exports|A larger workforce|Hunger harms health and education.`,
`Resources|Why does energy use differ between countries?|Differences in wealth, development and available resources|Time zones|Language|Distance from the equator only|Richer countries generally use more energy per person.`,
`Exam technique|What does the command word 'explain' require in geography?|A reasoned account of how or why something happens|A list of facts|A description of a pattern only|A personal opinion|Explanations link cause and effect.`,
`Exam technique|What does 'describe' ask you to do?|Say what something is like, such as a pattern or trend|Give reasons|Give an opinion|Calculate a total|Description states what is shown without reasons.`,
`Exam technique|In a four-figure grid reference, which number comes first?|The easting, along the bottom|The northing, up the side|The height|The scale|Remember: along the corridor, then up the stairs.`,
`Exam technique|How do you work out percentage change?|Divide the change by the original value and multiply by 100|Add the two values|Divide the new value by 100|Subtract 100|Percentage change is relative to the starting figure.`]);}

if(typeof window!=='undefined'){
const st=document.createElement('style');st.textContent='#sjroot .btn-p{background:linear-gradient(90deg,var(--acc),var(--acc2))}#sjroot .opt:hover:not(:disabled){border-color:var(--acc)}#sjroot .step b.n{background:var(--acc)}#sjroot .nc h4{color:var(--acc)}#sjroot .pill.on{background:var(--acc)}#sjroot .bar>i{background:linear-gradient(90deg,var(--acc),var(--acc2))}';document.head.appendChild(st);
document.querySelectorAll('[data-target="subjects"]').forEach(b=>b.remove());
const sb=(k,e,n,f)=>`<button onclick="${f}" data-target="sj-${k}" class="nav-btn w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/10">${e} ${n}</button>`;
const sn=document.getElementById('sidenav');sn.parentElement.classList.add('overflow-y-auto');
sn.insertAdjacentHTML('beforeend','<div class="text-[10px] uppercase tracking-widest text-indigo-300 px-4 pt-5 pb-1">Other subjects</div>'+Object.entries(SJ).map(([k,s])=>sb(k,s.e,s.n,`goSj('${k}')`)).join(''));
document.getElementById('mobnav').insertAdjacentHTML('beforeend',Object.entries(SJ).map(([k,s])=>`<button onclick="goSj('${k}')" data-target="sj-${k}" class="pill">${s.e} ${s.n}</button>`).join(''));
TITLES.subjects='Subjects';
document.getElementById('hdrq').textContent=(TOTAL+Object.keys(SJ).reduce((s,k)=>s+pool(k).length,0)).toLocaleString()+' questions'}

/* ===== PATCH 4: subject-neutral shell ===== */
const BT=['dashboard','notes','exam','formulas','flashcards','quiz'];
TH.biz=['#4f46e5','#7c3aed'];
const SCI=['bio','chem','phys'];const SUBS=[['biz','📈','Business','OCR GCSE J204'],...Object.entries(SJ).filter(([k])=>!SCI.includes(k)).map(([k,s])=>[k,s.e,s.n,s.b]),['sci','🔬','Science (Double Award)','Edexcel IGCSE 4SD0']].sort((a,b)=>a[2].localeCompare(b[2]));
const subQ=k=>k==='biz'?TOTAL:k==='sci'?SCI.reduce((s,x)=>s+pool(x).length+WQ[x].length,0):pool(k).length+WQ[k].length;
const sciCard=(k,e,n,b)=>`<div class="text-left rounded-2xl p-5 text-white shadow-md" style="background:linear-gradient(135deg,#16a34a,#7c3aed 55%,#ea580c)"><div class="text-3xl">${e}</div><h3 class="text-lg font-extrabold mt-2">${n}</h3><p class="text-xs opacity-90 mt-1">${b} · ${subQ(k).toLocaleString()} questions</p><div class="flex gap-2 flex-wrap mt-4">${SCI.map(x=>`<button onclick="goSj('${x}')" class="text-xs font-bold bg-white/25 hover:bg-white/40 px-3 py-1.5 rounded-full">${SJ[x].e} ${SJ[x].n}</button>`).join('')}</div></div>`;
function openSub(k){k==='biz'?switchTab('dashboard'):k==='sci'?goSj('bio'):goSj(k)}
function uiSync(t){
document.querySelectorAll('[data-target="home"]').forEach(b=>{b.classList.toggle('is-active',t==='home');b.classList.toggle('on',t==='home')});
const inB=BT.includes(t);
document.querySelectorAll('[data-target="sj-biz"]').forEach(b=>{b.classList.toggle('is-active',inB);b.classList.toggle('on',inB)});
document.querySelectorAll('.bizgrp').forEach(g=>g.classList.toggle('hidden',!inB));
const inS=t==='subjects'&&SCI.includes(sj.k);document.querySelectorAll('[data-target="sj-sci"]').forEach(b=>{b.classList.toggle('is-active',inS);b.classList.toggle('on',inS)});document.querySelectorAll('.scigrp').forEach(g=>g.classList.toggle('hidden',!inS));
if(t!=='subjects')document.querySelectorAll('[data-target^="sj-"]:not([data-target="sj-biz"])').forEach(b=>{b.classList.remove('is-active');b.classList.remove('on')});
if(t==='home')document.getElementById('page-title').textContent='Home';
if(inB)document.getElementById('page-title').textContent='Business · '+TITLES[t]}
const _st=switchTab;switchTab=function(t){_st(t);uiSync(t)};
if(typeof window!=='undefined'){
const sn=document.getElementById('sidenav'),mn=document.getElementById('mobnav');
const bs=[...sn.querySelectorAll('[data-target]')].filter(b=>BT.includes(b.dataset.target)),mbs=[...mn.querySelectorAll('[data-target]')].filter(b=>BT.includes(b.dataset.target));
const dot=k=>`<i style="background:${TH[k][0]}" class="w-2.5 h-2.5 rounded-full inline-block"></i>`;
sn.innerHTML='';bs.forEach(b=>b.classList.remove('is-active'));mbs.forEach(b=>b.classList.remove('is-active'));
sn.insertAdjacentHTML('beforeend',`<button onclick="switchTab('home')" data-target="home" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/10 is-active">🏠 Home</button><div class="text-[10px] uppercase tracking-widest text-indigo-300 px-4 pt-5 pb-1">Subjects</div>`);
SUBS.forEach(([k,e,n])=>{sn.insertAdjacentHTML('beforeend',`<button onclick="openSub('${k}')" data-target="sj-${k}" class="nav-btn w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/10">${dot(k)} ${n}</button>`);
if(k==='biz'){const g=document.createElement('div');g.className='bizgrp hidden ml-4 pl-3 border-l border-white/10 space-y-1';bs.forEach(b=>{b.classList.replace('py-3','py-2');g.appendChild(b)});sn.appendChild(g)}if(k==='sci'){const g=document.createElement('div');g.className='scigrp hidden ml-4 pl-3 border-l border-white/10 space-y-1';SCI.forEach(x=>g.insertAdjacentHTML('beforeend',`<button onclick="goSj('${x}')" data-target="sj-${x}" class="nav-btn w-full flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:bg-white/10">${dot(x)} ${SJ[x].n}</button>`));sn.appendChild(g)}});
mn.innerHTML=`<button onclick="switchTab('home')" data-target="home" class="pill on shrink-0">🏠 Home</button>`+SUBS.map(([k,e,n])=>`<button onclick="openSub('${k}')" data-target="sj-${k}" class="pill shrink-0">${e} ${n}</button>`).join('');
const mg=document.createElement('nav');mg.className='bizgrp hidden md:hidden flex gap-2 overflow-x-auto p-3 bg-slate-50 border-b border-[var(--line)]';mbs.forEach(b=>mg.appendChild(b));mn.after(mg);const ms=document.createElement('nav');ms.className='scigrp hidden md:hidden flex gap-2 overflow-x-auto p-3 bg-slate-50 border-b border-[var(--line)]';ms.innerHTML=SCI.map(x=>`<button onclick="goSj('${x}')" data-target="sj-${x}" class="pill shrink-0">${SJ[x].e} ${SJ[x].n}</button>`).join('');mg.after(ms);
document.querySelector('aside span').textContent='GCSE & IGCSE · Year 11 Mocks';
document.getElementById('dashboard').classList.remove('active');
const h=document.createElement('section');h.id='home';h.className='tab-content active space-y-8';
h.innerHTML=`<div style="background:linear-gradient(120deg,#0f172a,#312e81 55%,#be185d)" class="rounded-3xl text-white p-8 md:p-10 shadow-lg"><p class="text-xs font-bold tracking-widest uppercase opacity-80">Year 11 mock revision</p><h2 class="text-3xl md:text-4xl font-extrabold mt-2">Pick a subject and start scoring marks.</h2><p class="text-sm md:text-base opacity-90 mt-3 max-w-2xl">Exam technique, notes, flashcards, exam-style questions and mark-scheme practice for every subject, built around the exam board you sit.</p><div class="flex gap-2 flex-wrap mt-5 text-xs font-bold"><span class="bg-white/20 px-3 py-1 rounded-full">${SUBS.length} subjects</span><span class="bg-white/20 px-3 py-1 rounded-full">${SUBS.reduce((s,x)=>s+subQ(x[0]),0).toLocaleString()} questions</span></div></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">${SUBS.map(([k,e,n,b])=>k==='sci'?sciCard(k,e,n,b):`<button onclick="openSub('${k}')" class="text-left rounded-2xl p-5 text-white shadow-md hover:-translate-y-1 transition" style="background:linear-gradient(135deg,${TH[k][0]},${TH[k][1]})"><div class="text-3xl">${e}</div><h3 class="text-lg font-extrabold mt-2">${n}</h3><p class="text-xs opacity-90 mt-1">${b}</p><p class="text-xs font-bold mt-4 bg-white/20 inline-block px-3 py-1 rounded-full">${subQ(k).toLocaleString()} questions →</p></button>`).join('')}</div>`;
document.getElementById('dashboard').before(h);
document.getElementById('page-title').textContent='Home';
document.querySelector('aside > div:last-child').textContent='1 mark ≈ 1 minute. Practise like it is the real thing.'}
