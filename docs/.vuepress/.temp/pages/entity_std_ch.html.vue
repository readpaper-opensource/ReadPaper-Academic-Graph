<template><div><h1 id="实体标准" tabindex="-1"><a class="header-anchor" href="#实体标准"><span>实体标准</span></a></h1>
<p>我们使用知识图谱来存储和管理学术资源</p>
<h2 id="不同实体间关系" tabindex="-1"><a class="header-anchor" href="#不同实体间关系"><span>不同实体间关系</span></a></h2>
<p><img src="@source/img/KGen_00.png" alt="diff"></p>
<p><em>在此图中，圆形代表实体</em></p>
<table>
<thead>
<tr>
<th>实体</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>Paper</td>
<td>对应论文</td>
</tr>
<tr>
<td>Researcher</td>
<td>学术研究者(个人)</td>
</tr>
<tr>
<td>affiliation</td>
<td>进行科学研究的相关机构</td>
</tr>
<tr>
<td>scholarly sourcess</td>
<td>期刊、会议、或网站</td>
</tr>
<tr>
<td>Field of study</td>
<td>研究领域</td>
</tr>
</tbody>
</table>
<p>此图展示了不同实体之间可存在的关系，我们可以将此图视为以一篇论文为中心的最小整体</p>
<h2 id="相同实体关系" tabindex="-1"><a class="header-anchor" href="#相同实体关系"><span>相同实体关系</span></a></h2>
<p><img src="@source/img/KGen_01.png" alt="com1">
论文之间的关系有&quot;引用&quot;和&quot;被引用&quot;，我们可以用引用关系铺开一整张知识图谱网络</p>
<p><img src="@source/img/KGen_02.png" alt="com2">
研究者之间的关系，对于共同撰写同一论文的作者，我们可以确定他们有&quot;合作&quot;关系</p>
<p><img src="@source/img/KGen_03.png" alt="com3">
学术来源之间的关系，对于研究领域相同的期刊和会议，它们有&quot;同领域&quot;关系</p>
<p><img src="@source/img/KGen_04.png" alt="com4">
研究领域之间的关系，对于相关的研究领域，它们具有&quot;相关&quot;关系</p>
<h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性"><span>属性</span></a></h2>
<p>目前对于这五个不同的实体，有以下的属性</p>
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
<td>论文标题</td>
<td>&quot;Deep Learning for Natural Language Processing&quot;</td>
</tr>
<tr>
<td>Abstract</td>
<td>String</td>
<td>论文简介</td>
<td>&quot;This paper explores various deep learning models...&quot;</td>
</tr>
<tr>
<td>Source</td>
<td>String</td>
<td>论文来源或出版商</td>
<td>&quot;IEEE Transactions on Neural Networks&quot;</td>
</tr>
<tr>
<td>CitationCount</td>
<td>Integer</td>
<td>论文被引用次数</td>
<td>150</td>
</tr>
<tr>
<td>CitedBy</td>
<td>Integer</td>
<td>论文引用其他文献的数量</td>
<td>30</td>
</tr>
<tr>
<td>PublicationDate</td>
<td>String</td>
<td>论文发表日期</td>
<td>2021-06-15</td>
</tr>
<tr>
<td>JournalIssue</td>
<td>String</td>
<td>论文发表的期刊和期号</td>
<td>&quot;Vol. 29, No. 5&quot;</td>
</tr>
<tr>
<td>OriginalTextLink</td>
<td>String</td>
<td>原文链接，适应不同版本</td>
<td>&quot;https://www.examplejournal.org/article12345&quot;</td>
</tr>
<tr>
<td>ReadpaperReadingLink</td>
<td>String</td>
<td>在Readpaper平台上阅读论文的链接</td>
<td>&quot;https://readpaper.com/pdf-annotate/note?pdfId=1234&quot;</td>
</tr>
<tr>
<td>CitationFormat</td>
<td>String</td>
<td>论文引用格式的详细描述</td>
<td>&quot;APA, MLA, Chicago styles&quot;</td>
</tr>
<tr>
<td>InclusionStatus</td>
<td>String</td>
<td>论文在数据库中的收录状态</td>
<td>&quot;SCI, EI Indexed&quot;</td>
</tr>
<tr>
<td>JCR_Division</td>
<td>String</td>
<td>期刊引用报告的分区</td>
<td>&quot;Q1&quot;</td>
</tr>
<tr>
<td>Impact_Factor</td>
<td>Float</td>
<td>期刊的影响因子</td>
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
<td>读Paper平台上研究者的个人资料页面链接</td>
<td>&quot;https://readpaper.com/author/1234&quot;</td>
</tr>
<tr>
<td>ProfilePicture</td>
<td>String</td>
<td>研究者个人资料图片的链接</td>
<td>&quot;https://example.com/profile_picture.jpg&quot;</td>
</tr>
<tr>
<td>Name</td>
<td>String</td>
<td>研究者的全名</td>
<td>&quot;Dr. Jane Doe&quot;</td>
</tr>
<tr>
<td>TotalWorks</td>
<td>Integer</td>
<td>研究者发表的作品总数</td>
<td>35</td>
</tr>
<tr>
<td>Email</td>
<td>String</td>
<td>研究者的联系邮箱</td>
<td>&quot;jane.doe@example.com&quot;</td>
</tr>
<tr>
<td>TotalCitations</td>
<td>Integer</td>
<td>研究者作品被引用的总次数</td>
<td>1200</td>
</tr>
<tr>
<td>ResearchFields</td>
<td>String</td>
<td>研究者的研究领域</td>
<td>&quot;Machine Learning, Computational Linguistics, Data Privacy&quot;</td>
</tr>
<tr>
<td>PersonalSummary</td>
<td>String</td>
<td>研究者的简短个人简历或学术重点描述</td>
<td>&quot;Dr. Jane Doe has been a leading figure in computational linguistics...&quot;</td>
</tr>
<tr>
<td>EducationBackground</td>
<td>String</td>
<td>研究者的教育背景，包括学位和就读学校</td>
<td>&quot;Ph.D. in Computer Science, MIT&quot;</td>
</tr>
<tr>
<td>WorkExperience</td>
<td>String</td>
<td>研究者的工作经历</td>
<td>&quot;Senior Research Scientist at Google AI, previously professor at Stanford University&quot;</td>
</tr>
</tbody>
</table>
<h3 id="学术来源属性" tabindex="-1"><a class="header-anchor" href="#学术来源属性"><span>学术来源属性</span></a></h3>
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
<td>出版商涵盖的主要研究领域</td>
<td>&quot;Computer Science, Artificial Intelligence&quot;</td>
</tr>
<tr>
<td>Year</td>
<td>Integer</td>
<td>建立年份或相关的年份</td>
<td>1997</td>
</tr>
<tr>
<td>Website</td>
<td>String</td>
<td>出版商官方网站的链接</td>
<td>&quot;https://www.examplepublisher.com&quot;</td>
</tr>
<tr>
<td>Name</td>
<td>String</td>
<td>出版商的名称</td>
<td>&quot;Springer&quot;</td>
</tr>
<tr>
<td>ImpactFactor</td>
<td>Float</td>
<td>期刊的影响因子（如果适用）</td>
<td>5.312</td>
</tr>
<tr>
<td>Type</td>
<td>String</td>
<td>出版商的类别：期刊、会议或网站</td>
<td>&quot;Journal&quot;</td>
</tr>
</tbody>
</table>
<h3 id="机构属性" tabindex="-1"><a class="header-anchor" href="#机构属性"><span>机构属性</span></a></h3>
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
<td>研究机构的官方名称</td>
<td>&quot;Massachusetts Institute of Technology&quot;</td>
</tr>
<tr>
<td>Location</td>
<td>String</td>
<td>研究机构的地理位置</td>
<td>&quot;Cambridge, Massachusetts, USA&quot;</td>
</tr>
<tr>
<td>ResearchFields</td>
<td>String</td>
<td>研究机构的主要研究领域</td>
<td>&quot;Computer Science, Biology, Engineering&quot;</td>
</tr>
<tr>
<td>InstitutionType</td>
<td>String</td>
<td>研究机构的类型：商业公司或学校</td>
<td>&quot;School&quot;</td>
</tr>
</tbody>
</table>
<h3 id="研究领域属性" tabindex="-1"><a class="header-anchor" href="#研究领域属性"><span>研究领域属性</span></a></h3>
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
<td>研究领域的正式名称</td>
<td>&quot;Artificial Intelligence&quot;</td>
</tr>
<tr>
<td>Description</td>
<td>String</td>
<td>研究领域的简要概述或总结</td>
<td>&quot;研究算法如何通过经验自我改进的学科。&quot;</td>
</tr>
<tr>
<td>Keywords</td>
<td>String</td>
<td>与该领域相关的关键词</td>
<td>&quot;Machine learning, neural networks, deep learning&quot;</td>
</tr>
<tr>
<td>Main Research Questions</td>
<td>String</td>
<td>该领域内的核心问题或关注点</td>
<td>&quot;How can machines learn from data?&quot;</td>
</tr>
<tr>
<td>Theoretical Basis</td>
<td>String</td>
<td>该领域的核心理论或模型</td>
<td>&quot;Statistical learning theory&quot;</td>
</tr>
<tr>
<td>Methodologies</td>
<td>String</td>
<td>该领域使用的常见研究方法或技术</td>
<td>&quot;Supervised learning, unsupervised learning&quot;</td>
</tr>
<tr>
<td>Leading Scholars</td>
<td>String</td>
<td>该领域的杰出研究者或学者</td>
<td>&quot;Andrew Ng, Geoffrey Hinton&quot;</td>
</tr>
<tr>
<td>Key Publications</td>
<td>String</td>
<td>该领域内重要的书籍、论文或期刊</td>
<td>&quot;Journal of Machine Learning Research&quot;</td>
</tr>
<tr>
<td>Related Disciplines</td>
<td>String</td>
<td>与该学科相关的其他学科</td>
<td>&quot;Statistics, computer science, cognitive science&quot;</td>
</tr>
<tr>
<td>Main Research Institutions</td>
<td>String</td>
<td>专注于该领域的主要大学或机构</td>
<td>&quot;Stanford University, MIT&quot;</td>
</tr>
</tbody>
</table>
</div></template>


