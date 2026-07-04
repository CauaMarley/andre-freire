#!/bin/bash
awk '
/{\/\* CTA Banner \*\/}/ {
  print "        {/* Curriculum Section */}"
  print "        <div className=\"mb-24\">"
  print "          <div className=\"text-center mb-12\">"
  print "            <h2 className=\"text-4xl md:text-5xl font-heading font-medium tracking-tight mb-4 text-zinc-900\">"
  print "              Fundamental Curriculum"
  print "            </h2>"
  print "            <div className=\"flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider text-red-700 mb-8\">"
  print "              <span>Warm-up: 7 MIN</span>"
  print "              <span>•</span>"
  print "              <span>Self-Defense & Takedowns: 16 MIN</span>"
  print "              <span>•</span>"
  print "              <span>Water Break: 2 MIN</span>"
  print "              <span>•</span>"
  print "              <span>Sport Jiu-Jitsu: 20 MIN</span>"
  print "              <span>•</span>"
  print "              <span>Specific Training: 10 MIN</span>"
  print "              <span>•</span>"
  print "              <span>Cool Down: 5 MIN</span>"
  print "            </div>"
  print "          </div>"
  print "          <div className=\"max-w-4xl mx-auto\">"
  print "            {adultCurriculum.map((week) => ("
  print "              <CurriculumWeek key={week.number} week={week} />"
  print "            ))}"
  print "          </div>"
  print "        </div>"
  print ""
}
{ print }
' src/pages/AdultsTeensJiuJitsu.tsx > temp.tsx && mv temp.tsx src/pages/AdultsTeensJiuJitsu.tsx
