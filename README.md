
# Fusion Rector FREC Realtime And Request Stats Log Viewer

by [Ben Nadel][1] (on [Googl+][2])

When running a ColdFusion application on a J2EE server, I use 
[Fusion Reactor][3] to monitor the health and performance of the web 
application. Fusion Reactor is simply awesome. But, one of the things I find
it lacks (at least as far as I can tell) is an easy way to read the Realtime 
and Request stats log.

**[Run the FREC Realtime And Request Stats Log Viewer][5]**

The Realtime and Request stats log is part of FREC - Fusion Reactor Extensions
for ColdFusion. It's a [40-field log file][4] (at the time of this writing) 
that can provide insight into memory usage, request load, cache size, and many
other interesting analytics.

This project, allows you to copy/paste the contents of the FREC 
realtimestats.log into a textarea and render it as an easy-to-read data-grid.
That's all, at least at this moment.

## What You Input

<p align="center">
	<img src="https://raw.github.com/bennadel/FREC-Log-Viewer/master/screenshots/input.png" /><br />
</p>

## What You Output

<p align="center">
	<img src="https://raw.github.com/bennadel/FREC-Log-Viewer/master/screenshots/output.png" /><br />
</p>

[1]: http://www.bennadel.com
[2]: https://plus.google.com/108976367067760160494?rel=author
[3]: http://www.fusion-reactor.com
[4]: http://docs.intergral.com/pages/viewpage.action?pageId=27656428
[5]: http://bennadel.github.io/FREC-Log-Viewer/app/index.htm