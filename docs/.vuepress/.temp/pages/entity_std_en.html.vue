<template><div><h1 id="entity-standards" tabindex="-1"><a class="header-anchor" href="#entity-standards"><span>Entity Standards</span></a></h1>
<p>We use a knowledge graph to store and manage academic resources.</p>
<h2 id="relationships-between-different-entities" tabindex="-1"><a class="header-anchor" href="#relationships-between-different-entities"><span>Relationships Between Different Entities</span></a></h2>
<p><img src="@source/img/KGen_00.png" alt="diff"></p>
<p><em>In this diagram, circles represent entities .</em></p>
<table>
<thead>
<tr>
<th>Entity</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Paper</td>
<td>Corresponds to a specific academic paper.</td>
</tr>
<tr>
<td>Researcher</td>
<td>Individual academic researchers.</td>
</tr>
<tr>
<td>Affiliation</td>
<td>Organizations involved in scientific research.</td>
</tr>
<tr>
<td>Scholarly sourcess</td>
<td>Journals, conferences, or websites.</td>
</tr>
<tr>
<td>Field of Study</td>
<td>Specific area of academic research or expertise.</td>
</tr>
</tbody>
</table>
<p>This diagram shows the possible relationships between different entities, with a paper as the central focus of the minimal whole.</p>
<h2 id="relationships-among-same-entities" tabindex="-1"><a class="header-anchor" href="#relationships-among-same-entities"><span>Relationships Among Same Entities</span></a></h2>
<p><img src="@source/img/KGen_01.png" alt="com1">
Relationships between papers include &quot;cites&quot; and &quot;is cited by&quot;, which can expand into an entire knowledge graph network.</p>
<p><img src="@source/img/KGen_02.png" alt="com2">
Relationships between researchers, for co-authors of the same paper, can be identified as &quot;collaborators&quot;.</p>
<p><img src="@source/img/KGen_03.png" alt="com3">
Relationships between scholarly sourcess, for journals and conferences in the same research field, can be identified as &quot;Co field&quot;.</p>
<p><img src="@source/img/KGen_040.png" alt="com4">
Relationships between field of Study,if the fields are related, we mark the relationship as &quot;related&quot;</p>
<p><img src="@source/img/KGen_041.png" alt="com5">
if two fields have a hierarchical relationship, we use the term 'Branch of' to describe the relationship</p>
<h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span>Attributes</span></a></h2>
<p>Currently, there are the following attributes for these four different entities:</p>
<h3 id="paper-attributes" tabindex="-1"><a class="header-anchor" href="#paper-attributes"><span>Paper Attributes</span></a></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>File Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Title</td>
<td>String</td>
<td>The title of the paper</td>
<td>&quot;Deep Learning for Natural Language Processing&quot;</td>
</tr>
<tr>
<td>Abstract</td>
<td>String</td>
<td>A brief summary of the paper</td>
<td>&quot;This paper explores various deep learning models...&quot;</td>
</tr>
<tr>
<td>Source</td>
<td>String</td>
<td>The origin or the publisher of the paper</td>
<td>&quot;IEEE Transactions on Neural Networks&quot;</td>
</tr>
<tr>
<td>CitationCount</td>
<td>Integer</td>
<td>The number of times the paper has been cited</td>
<td>150</td>
</tr>
<tr>
<td>CitedBy</td>
<td>Integer</td>
<td>Number of references within the paper</td>
<td>30</td>
</tr>
<tr>
<td>PublicationDate</td>
<td>String</td>
<td>The date when the paper was published</td>
<td>2021-06-15</td>
</tr>
<tr>
<td>JournalIssue</td>
<td>String</td>
<td>The issue of the journal in which the paper appeared</td>
<td>&quot;Vol. 29, No. 5&quot;</td>
</tr>
<tr>
<td>OriginalTextLink</td>
<td>String</td>
<td>Link to the original paper, adaptable for versions</td>
<td>&quot;https://www.examplejournal.org/article12345&quot;</td>
</tr>
<tr>
<td>ReadpaperReadingLink</td>
<td>Class</td>
<td>Links to read the paper on Readpaper platform</td>
<td>&quot;https://readpaper.com/pdf-annotate/note?pdfId=1234&quot;</td>
</tr>
<tr>
<td>CitationFormat</td>
<td>Class</td>
<td>Various citation formats as detailed on Readpaper</td>
<td>&quot;APA, MLA, Chicago styles&quot;</td>
</tr>
<tr>
<td>InclusionStatus</td>
<td>String</td>
<td>Status of the paper’s inclusion in databases</td>
<td>&quot;SCI, EI Indexed&quot;</td>
</tr>
<tr>
<td>JCR_Division</td>
<td>String</td>
<td>Journal Citation Reports division</td>
<td>&quot;Q1&quot;</td>
</tr>
<tr>
<td>Impact_Factor</td>
<td>Float</td>
<td>The impact factor of the journal</td>
<td>7.89</td>
</tr>
<tr>
<td>DOI</td>
<td>String</td>
<td>The Digital Object Identifier of the paper</td>
<td>&quot;10.1000/xyz123&quot;</td>
</tr>
<tr>
<td>Keywords</td>
<td>String</td>
<td>Key terms associated with the paper</td>
<td>&quot;machine learning, natural language processing, neural networks&quot;</td>
</tr>
<tr>
<td>FundingInformation</td>
<td>String</td>
<td>Details of financial support for the research</td>
<td>&quot;Funded by the National Science Foundation under grant no. XYZ1234&quot;</td>
</tr>
<tr>
<td>AcceptanceDate</td>
<td>String</td>
<td>The date when the paper was accepted by the journal</td>
<td>&quot;2021-05-10&quot;</td>
</tr>
<tr>
<td>ArticleType</td>
<td>String</td>
<td>The type of the paper, e.g., review, research, etc.</td>
<td>&quot;Research Article&quot;</td>
</tr>
<tr>
<td>PeerReviewStatus</td>
<td>String</td>
<td>The status of the peer review process</td>
<td>&quot;Double-blind peer reviewed&quot;</td>
</tr>
</tbody>
</table>
<h3 id="researcher-attributes" tabindex="-1"><a class="header-anchor" href="#researcher-attributes"><span>Researcher Attributes</span></a></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>File Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>ProfilePage</td>
<td>String</td>
<td>Default personal profile page URL on the ReadPaper platform</td>
<td>&quot;https://readpaper.com/author/1234&quot;</td>
</tr>
<tr>
<td>ProfilePicture</td>
<td>String</td>
<td>URL for the researcher's profile picture</td>
<td>&quot;https://example.com/profile_picture.jpg&quot;</td>
</tr>
<tr>
<td>Name</td>
<td>String</td>
<td>Full name of the researcher</td>
<td>&quot;Dr. Jane Doe&quot;</td>
</tr>
<tr>
<td>TotalWorks</td>
<td>Integer</td>
<td>Total number of published works as a string</td>
<td>35</td>
</tr>
<tr>
<td>Email</td>
<td>String</td>
<td>Contact email address as a string</td>
<td>&quot;jane.doe@example.com&quot;</td>
</tr>
<tr>
<td>TotalCitations</td>
<td>Integer</td>
<td>Total number of times the researcher's works have been cited as a string</td>
<td>1200</td>
</tr>
<tr>
<td>ResearchFields</td>
<td>String</td>
<td>Areas of research expertise listed as a string</td>
<td>&quot;Machine Learning, Computational Linguistics, Data Privacy&quot;</td>
</tr>
<tr>
<td>PersonalSummary</td>
<td>String</td>
<td>Brief biography or summary of academic focus</td>
<td>&quot;Dr. Jane Doe has been a leading figure in computational linguistics...&quot;</td>
</tr>
<tr>
<td>EducationBackground</td>
<td>String</td>
<td>Educational history including degrees and institutions</td>
<td>&quot;Ph.D. in Computer Science, MIT&quot;</td>
</tr>
<tr>
<td>WorkExperience</td>
<td>String</td>
<td>Summary of past and current positions as a string</td>
<td>&quot;Senior Research Scientist at Google AI, previously professor at Stanford University&quot;</td>
</tr>
<tr>
<td>SocialMediaLinks</td>
<td>String</td>
<td>Links to the researcher's social media profiles</td>
<td>&quot;Twitter: @DrJaneDoe, LinkedIn: linkedin.com/in/janedoe&quot;</td>
</tr>
<tr>
<td>OfficeAddress</td>
<td>String</td>
<td>Physical location of the researcher's office</td>
<td>&quot;Room 404, Science Building, Stanford University&quot;</td>
</tr>
<tr>
<td>ResearchGroup</td>
<td>String</td>
<td>Name and link to the researcher's research group or lab</td>
<td>&quot;Machine Learning Lab, https://mlab.stanford.edu&quot;</td>
</tr>
<tr>
<td>AcademicAwards</td>
<td>String</td>
<td>Academic awards or honors the researcher has received</td>
<td>&quot;ACM Fellow, IEEE Best Paper Award&quot;</td>
</tr>
<tr>
<td>AcademicService</td>
<td>String</td>
<td>Service roles the researcher has in academic journals or conferences</td>
<td>&quot;Editor for Nature Machine Intelligence, Chair for NeurIPS 2023&quot;</td>
</tr>
<tr>
<td>Patents</td>
<td>String</td>
<td>Patents that the researcher holds or co-holds</td>
<td>&quot;US9876543 - Methods of improving neural network efficiency&quot;</td>
</tr>
<tr>
<td>Lectures</td>
<td>String</td>
<td>Important lectures or talks given by the researcher</td>
<td>&quot;Keynote Speech at ICCV 2021&quot;</td>
</tr>
<tr>
<td>ResearchGrants</td>
<td>String</td>
<td>Grants received by the researcher for ongoing or completed research</td>
<td>&quot;NSF Grant #123456 for Research on AI Ethics&quot;</td>
</tr>
<tr>
<td>AcademicInterests</td>
<td>String</td>
<td>Specific academic interests of the researcher</td>
<td>&quot;Deep Learning, Ethical AI, Data Security&quot;</td>
</tr>
</tbody>
</table>
<h3 id="scholarly-sourcess-attributes" tabindex="-1"><a class="header-anchor" href="#scholarly-sourcess-attributes"><span>Scholarly sourcess Attributes</span></a></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>File Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>ResearchFields</td>
<td>String</td>
<td>Primary research areas covered by the publisher</td>
<td>&quot;Computer Science, Artificial Intelligence&quot;</td>
</tr>
<tr>
<td>Year</td>
<td>Integer</td>
<td>The year of establishment or the year relevant to the context</td>
<td>1997</td>
</tr>
<tr>
<td>Website</td>
<td>String</td>
<td>URL of the publisher's official website</td>
<td>&quot;https://www.examplepublisher.com&quot;</td>
</tr>
<tr>
<td>Name</td>
<td>String</td>
<td>Name of the publisher</td>
<td>&quot;Springer&quot;</td>
</tr>
<tr>
<td>ImpactFactor</td>
<td>Float</td>
<td>Journal's impact factor if applicable</td>
<td>5.312</td>
</tr>
<tr>
<td>Type</td>
<td>String</td>
<td>The category of the publisher: journal, conference, or website</td>
<td>&quot;Journal&quot;</td>
</tr>
<tr>
<td>EditorialOfficeAddress</td>
<td>String</td>
<td>Address of the journal or conference editorial office</td>
<td>&quot;1234 Journal St, Cambridge, MA 02139&quot;</td>
</tr>
<tr>
<td>ISSNNumber</td>
<td>String</td>
<td>International Standard Serial Number for the journal</td>
<td>&quot;1234-5678&quot;</td>
</tr>
<tr>
<td>ConferenceLocation</td>
<td>String</td>
<td>Specific location where the conference is held</td>
<td>&quot;Las Vegas Convention Center, Las Vegas, NV&quot;</td>
</tr>
<tr>
<td>ConferenceDates</td>
<td>String</td>
<td>Dates during which the conference takes place</td>
<td>&quot;2024-09-10 to 2024-09-13&quot;</td>
</tr>
<tr>
<td>AcceptedPaperTypes</td>
<td>String</td>
<td>Types of papers accepted by the journal or conference</td>
<td>&quot;Full papers, Abstracts, Poster presentations&quot;</td>
</tr>
<tr>
<td>ReviewPeriod</td>
<td>String</td>
<td>Average time from paper submission to acceptance notification</td>
<td>&quot;3 months&quot;</td>
</tr>
<tr>
<td>Organizers</td>
<td>String</td>
<td>Organizations that host the journal or conference</td>
<td>&quot;IEEE&quot;</td>
</tr>
<tr>
<td>KeynoteSpeakers</td>
<td>String</td>
<td>Keynote speakers at the conference</td>
<td>&quot;Dr. John Smith, Prof. Alice Johnson&quot;</td>
</tr>
<tr>
<td>SubmissionDeadline</td>
<td>String</td>
<td>Deadline for paper submissions</td>
<td>&quot;2024-05-01&quot;</td>
</tr>
<tr>
<td>ConferenceFrequency</td>
<td>String</td>
<td>Frequency of the conference</td>
<td>&quot;Annually&quot;</td>
</tr>
</tbody>
</table>
<h3 id="affiliation-attributes" tabindex="-1"><a class="header-anchor" href="#affiliation-attributes"><span>Affiliation Attributes</span></a></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>File Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td>String</td>
<td>The official name of the Affiliation</td>
<td>&quot;Massachusetts Institute of Technology&quot;</td>
</tr>
<tr>
<td>Location</td>
<td>String</td>
<td>Geographic location of the Affiliation</td>
<td>&quot;Cambridge, Massachusetts, USA&quot;</td>
</tr>
<tr>
<td>ResearchFields</td>
<td>String</td>
<td>Primary areas of research focus</td>
<td>&quot;Computer Science, Biology, Engineering&quot;</td>
</tr>
<tr>
<td>InstitutionType</td>
<td>String</td>
<td>Nature of the affiliation: commercial company or school</td>
<td>&quot;School&quot;</td>
</tr>
<tr>
<td>EstablishedYear</td>
<td>Integer</td>
<td>Year when the institution was established</td>
<td>1861</td>
</tr>
<tr>
<td>NumberOfStudents</td>
<td>Integer</td>
<td>Total number of students enrolled</td>
<td>11000</td>
</tr>
<tr>
<td>AcademicStaff</td>
<td>Integer</td>
<td>Number of academic staff members</td>
<td>1000</td>
</tr>
<tr>
<td>CampusArea</td>
<td>String</td>
<td>Size or description of the campus area</td>
<td>&quot;168 acres&quot;</td>
</tr>
<tr>
<td>Website</td>
<td>String</td>
<td>URL of the institution's official website</td>
<td>&quot;https://www.mit.edu&quot;</td>
</tr>
<tr>
<td>Accreditation</td>
<td>String</td>
<td>Accreditation status and accrediting organization</td>
<td>&quot;Regionally accredited by the New England Commission&quot;</td>
</tr>
<tr>
<td>Ranking</td>
<td>String</td>
<td>Academic ranking or position in global or national lists</td>
<td>&quot;Ranked #1 in Engineering globally by QS World Rankings&quot;</td>
</tr>
<tr>
<td>LibrarySize</td>
<td>String</td>
<td>Description or size of the institution's library collections</td>
<td>&quot;Over 3 million volumes&quot;</td>
</tr>
<tr>
<td>AlumniNetworkSize</td>
<td>Integer</td>
<td>Number of registered members in the institution’s alumni network</td>
<td>130000</td>
</tr>
<tr>
<td>InternationalStudents</td>
<td>String</td>
<td>Percentage or number of international students</td>
<td>&quot;10,000 students or 30%&quot;</td>
</tr>
</tbody>
</table>
<h3 id="field-of-study-attributes" tabindex="-1"><a class="header-anchor" href="#field-of-study-attributes"><span>Field of Study Attributes</span></a></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td>String</td>
<td>The official name of the Research Field</td>
<td>&quot;Artificial Intelligence&quot;</td>
</tr>
<tr>
<td>Description</td>
<td>String</td>
<td>Brief overview or summary of the research field</td>
<td>&quot;Study of algorithms that automatically improve through experience.&quot;</td>
</tr>
<tr>
<td>Keywords</td>
<td>String</td>
<td>Key terms associated with the field</td>
<td>&quot;Machine learning, neural networks, deep learning&quot;</td>
</tr>
<tr>
<td>Main Research Questions</td>
<td>String</td>
<td>Core questions or focus areas within the field</td>
<td>&quot;How can machines learn from data?&quot;</td>
</tr>
<tr>
<td>Theoretical Basis</td>
<td>String</td>
<td>Core theories or models in the field</td>
<td>&quot;Statistical learning theory&quot;</td>
</tr>
<tr>
<td>Methodologies</td>
<td>String</td>
<td>Common research methods or techniques used</td>
<td>&quot;Supervised learning, unsupervised learning&quot;</td>
</tr>
<tr>
<td>Leading Scholars</td>
<td>String</td>
<td>Prominent researchers or scholars in the field</td>
<td>&quot;Andrew Ng, Geoffrey Hinton&quot;</td>
</tr>
<tr>
<td>Key Publications</td>
<td>String</td>
<td>Important books, papers, or journals in the field</td>
<td>&quot;Journal of Machine Learning Research&quot;</td>
</tr>
<tr>
<td>Related Disciplines</td>
<td>String</td>
<td>Other academic disciplines related to the field</td>
<td>&quot;Statistics, computer science, cognitive science&quot;</td>
</tr>
<tr>
<td>Main Research Institutions</td>
<td>String</td>
<td>Major universities or institutions focusing on the field</td>
<td>&quot;Stanford University, MIT&quot;</td>
</tr>
</tbody>
</table>
<h3 id="public-attributes" tabindex="-1"><a class="header-anchor" href="#public-attributes"><span>Public Attributes</span></a></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>ID</td>
<td>Integer</td>
<td>Unique identifier for each record in the database</td>
<td>12345</td>
</tr>
<tr>
<td>DeletionMark</td>
<td>Boolean</td>
<td>Indicator whether the record is marked for deletion</td>
<td>false</td>
</tr>
<tr>
<td>EntryDate</td>
<td>DateTime</td>
<td>Timestamp when the record was entered into the database</td>
<td>&quot;2024-09-12T14:00:00Z&quot;</td>
</tr>
</tbody>
</table>
</div></template>


