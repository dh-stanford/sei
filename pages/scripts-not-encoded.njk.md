---
title: "Scripts Not Encoded"
date: 2014-11-01
permalink: "scripts-not-encoded.html"
layout: "layouts/post.njk"
---

Below is a list of scripts that are not yet officially encoded in the Unicode Standard (and ISO/IEC 10646). (For a list of scripts that have successfully been encoded with assistance from SEI, see the <a href="scripts-encoded.html">Completed Scripts page</a>.)

The TYPE field indicates the basic script type:

* (A) Alphabets & Abjads
* (A-S) Alphasyllabary
* (G) Abugidas
* (L) Logosyllabaries
* (I) Ideographic systems
* (N) Numeric
* (Lg) Logographs
* (S) Syllabaries

The type values in the HMA field are:

* (h) for historical scripts
* (m) for living minority scripts (including those in liturgical use and categorized as "near-modern")
* (a) for artificial scripts

The PROPOSAL field indicates whether a proposal has been written. A link is made to the most current proposal, if available. In some cases the proposals are only preliminary, and may include just a code chart and a list of names. Not all scripts listed will necessarily be encoded. Those proposals which have received assistance from SEI are marked with an asterisk (*):

* (Y) for "Yes
* (Approved) if the proposal has been approved by the Unicode Technical Committee

The CONTACT field is the name of the central contact person in charge of coordinating activities related to the script proposal:

* (Everson) is Michael Everson 
* (Pandey) is Anshuman Pandey

The following scripts need further information before being added to the list below. If you have information, please contact Deborah Anderson:

 * Archaic Miao Square Script
 * Asho Chin
 * Cacaxtla
 * Duota
 * Fakkham
 * Izapa
 * Jing
 * Kaminaljuyu
 * Khamyang
 * Lik Hto Ngouk
 * Old Khmer
 * Old Mon
 * Pale Palaung
 * Rakhawunna
 * Rencong
 * Savara
 * Tajin
 * Takalik Abaj
 * Thai Nithet
 * Thai Noi (Lao Buhan)
 * Thai Yo(r)
 * Tula

<table class="table">
<tr>
	<td><strong>Language</strong></td>
	<td><strong>Type</strong></td>
	<td><strong>HMA</strong></td>
	<td><strong>Proposal</strong></td>
	<td><strong>Contact</strong></td>
</tr>

{%- for lang in NotEncoded -%}

<tr>
	<td>{{lang.name}}</td>
	<td>{% if lang.type %}{{lang.type}}{% endif %}</td>
	<td>{% if lang.hma %}{{lang.hma}}{% endif %}</td>
	<td>{% if lang.proposal %}<a href="{{lang.link}}">{{lang.proposal}}</a>{% endif %}</td>
	<td>{% if lang.contact %}{{lang.contact}}{% endif %}</td>
</tr>
{% endfor %}

</table>
