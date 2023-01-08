---
title: "Scripts Encoded"
date: 2014-11-01
permalink: "scripts-encoded.html"
layout: "layouts/post.njk"
---

This list includes proposals funded in whole or in part by SEI that have been completed and have been published. This list is provided purely for tracking past proposals.

LAST UPDATE: December 2021

<table class="table">
<tr>
	<td><strong>Language</strong></td>
	<td><strong>Proposal</strong></td>
	<td><strong>Contact</strong></td>
</tr>

{%- for lang in Encoded -%}

<tr>
	<td>{{lang.name}}</td>
	<td>{% if lang.link %}<a href="{{lang.link}}">Proposal</a>{% endif %}</td>
	<td>{% if lang.contact %}{{lang.contact}}{% endif %}</td>
</tr>
{% endfor %}

</table>
