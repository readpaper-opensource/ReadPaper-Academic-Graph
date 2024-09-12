<template><div><h1 id="实体标准" tabindex="-1"><a class="header-anchor" href="#实体标准"><span>实体标准</span></a></h1>
<p>我们使用知识图谱来存储和管理学术资源</p>
<h2 id="不同实体间关系" tabindex="-1"><a class="header-anchor" href="#不同实体间关系"><span>不同实体间关系</span></a></h2>
<p><img src="@source/img/KG0.png" alt="diff"></p>
<p><em>在此图中，圆形代表实体，矩形代表属性</em></p>
<table>
<thead>
<tr>
<th>实体</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>论文</td>
<td>对应论文</td>
</tr>
<tr>
<td>研究者</td>
<td>学术研究者(个人)</td>
</tr>
<tr>
<td>研究机构</td>
<td>进行科学研究的相关机构</td>
</tr>
<tr>
<td>出版方</td>
<td>期刊、会议、或网站</td>
</tr>
</tbody>
</table>
<p>此图展示了不同实体之间可存在的关系和实体具有的属性，我们可以将此图视为以一篇论文为中心的最小整体</p>
<h2 id="相同实体关系" tabindex="-1"><a class="header-anchor" href="#相同实体关系"><span>相同实体关系</span></a></h2>
<p><img src="@source/img/KG1.png" alt="com1">
论文之间的关系有&quot;引用&quot;和&quot;被引用&quot;，我们可以用引用关系铺开一整张知识图谱网络</p>
<p><img src="@source/img/KG2.png" alt="com2">
研究者之间的关系，对于共同撰写同一论文的作者，我们可以确定他们有&quot;合作&quot;关系</p>
<p><img src="@source/img/KG3.png" alt="com3">
出版方之间的关系，对于研究领域相同的期刊和会议，它们有&quot;同领域&quot;关系</p>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>
<p>目前对于这四个不同的实体，有以下的属性</p>
<h3 id="论文属性" tabindex="-1"><a class="header-anchor" href="#论文属性"><span>论文属性</span></a></h3>
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
<td>String</td>
<td>Link to read the paper on Readpaper platform</td>
<td>&quot;https://readpaper.com/pdf-annotate/note?pdfId=1234&quot;</td>
</tr>
<tr>
<td>CitationFormat</td>
<td>String</td>
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
</tbody>
</table>
<h3 id="研究者属性" tabindex="-1"><a class="header-anchor" href="#研究者属性"><span>研究者属性</span></a></h3>
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
</tbody>
</table>
<h3 id="出版方属性" tabindex="-1"><a class="header-anchor" href="#出版方属性"><span>出版方属性</span></a></h3>
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
</tbody>
</table>
<h3 id="研究机构属性" tabindex="-1"><a class="header-anchor" href="#研究机构属性"><span>研究机构属性</span></a></h3>
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
<td>The official name of the research institution</td>
<td>&quot;Massachusetts Institute of Technology&quot;</td>
</tr>
<tr>
<td>Location</td>
<td>String</td>
<td>Geographic location of the institution</td>
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
<td>Nature of the institution: commercial company or school</td>
<td>&quot;School&quot;</td>
</tr>
</tbody>
</table>
</div></template>


