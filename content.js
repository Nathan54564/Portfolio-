/**
 * Edit this file to update the site.
 *
 * Add a real project to `projects`, or a job / team role to `experience`.
 * While a list is empty, the page shows labeled examples for that section.
 * The examples disappear as soon as that list has one real entry.
 *
 * Project shape:
 * {
 *   title: "Project name",
 *   year: "2026",
 *   summary: "One or two sentences on what you built and why it mattered.",
 *   tags: ["Altium", "Firmware"],
 *   image: "assets/photo.jpg",          // optional
 *   highlights: ["What you owned", "What you measured"],
 *   links: [{ label: "Writeup", href: "https://..." }]
 * }
 *
 * Experience shape:
 * {
 *   role: "Electrical Engineering Intern",
 *   org: "Company",
 *   dates: "Summer 2026",
 *   location: "City, ST",
 *   summary: "The hardware or system you were responsible for.",
 *   highlights: ["A result you can talk about in an interview"],
 *   href: ""                            // optional link to a project or writeup
 * }
 */
const SITE = {
  name: "Nathan Zhang",
  role: "Electrical Engineer",
  school: "University of Pennsylvania",
  degree: "BSE Electrical Engineering",
  classYear: "2028",
  blurb:
    "I build electrical hardware: boards, embedded firmware, and the tests that prove they work.",
  about: [
    "I am an electrical engineering student at the University of Pennsylvania, class of 2028. I design the board, write the firmware that has to run on it, and take the measurement that shows the two agree.",
    "Recent work is board design, firmware, and bench measurement. At Hologic I debugged imaging electronics with a spectrum analyzer and an oscilloscope. At NJIT I laid out a flexible charge amplifier. With ADAPT I am leading an EMG-controlled arm. I also led aerodynamics for Penn Aerial Robotics.",
    "I am open to winter, spring, and summer 2027 internships in electrical engineering, robotics, and mechatronics.",
  ],
  email: "nzha@engineering.upenn.edu",
  phone: "+19085484052",
  linkedin: "https://www.linkedin.com/in/nathan-c-zhang",
  github: "https://github.com/Nathan54564",
  resume: "",
  seeking:
    "Open to winter, spring, and summer 2027 internships in electrical engineering, robotics, and mechatronics.",
  openTo: "Winter, spring, and summer 2027",
  seekingFocus: "Internships in electrical engineering, robotics, and mechatronics.",
  glance: [
    {
      title: "Current focus",
      text: "Board-level hardware, embedded firmware, and the bench measurements that prove them.",
    },
    {
      title: "Interests",
      text: "Analog front ends, embedded systems, robotics hardware, and PCB design.",
    },
    {
      title: "Seeking",
      text: "Winter, spring, and summer 2027 internships.",
    },
  ],
  skills: [
    { group: "Hardware", items: ["Altium", "LTspice", "PCB layout", "SolidWorks", "Ansys", "XFLR5", "COMSOL"] },
    { group: "Embedded", items: ["C", "Python", "Java", "STM32", "ATmega328PB", "Arduino", "TensorFlow"] },
    { group: "Test", items: ["Oscilloscopes", "Spectrum analyzers", "Near-field probes", "Function generators", "DMM", "SMD rework"] },
  ],
  projects: [
    {
      title: "Bionic Arm",
      year: "2026 –",
      summary:
        "This is a mechanical arm meant to move when the wearer flexes their forearm. A band of sensors picks up the electrical signal from the muscles, a main circuit board reads those sensors, and motors in the hand close the fingers, move the thumb, or swing the arm. I am designing those circuit boards and the program that turns a muscle reading into a motor movement. The main board is built. The sensors and the hand are still being designed.",
      tags: ["STM32", "EMG", "ADS1291", "Altium"],
      images: [
        {
          src: "assets/bionic-main.jpg",
          alt: "Green main board labeled Bionic arm main, with servo headers, a yellow battery connector, and a flat cable",
          caption: "The main board: STM32, two servo headers, the battery connector, and the cable to the sensors.",
        },
        {
          src: "assets/bionic-sense-main.jpg",
          alt: "Render of the sensor hub board labeled Bionic arm Sense main, with a differential electrode pair",
          caption: "Sensor hub. It collects the modules and carries its own electrode pair.",
        },
        {
          src: "assets/bionic-main-layout.jpg",
          alt: "Layout of the Bionic arm main board, with servo headers, an actuator connector, a battery pad, and the flat-cable footprint",
          caption: "Main-board layout: two servos, the actuator, the battery, and the flat cable.",
        },
        {
          src: "assets/bionic-hand.jpg",
          alt: "CAD of a mechanical hand with two servos, one on the thumb and one driving four fingers",
          caption: "The hand: one servo for the four fingers, one for the thumb.",
        },
      ],
      highlights: [
        "What it does: muscle activity in the forearm is read as an electrical signal, sent to a circuit board, and used to command the hand. A contraction can close the fingers, move the thumb, or swing the arm. The pieces below are the hardware and program that perform that sequence.",
        "Sensor modules sit around the forearm. Each one is a small rigid board with a differential pair of gold-plated electrode pads, protection diodes, a resistor-capacitor filter, and an ADS1291 converter. A hub board carries its own electrode pair and the cable junctions. Flat cable runs from the hub to the plain modules and from the hub to the main board.",
        "The converters share one SPI bus. Each has its own chip-select line. A shared start line begins their conversions together, and a data-ready line marks each new set of samples. The main board reads the chips one after another and stores one frame of channels. Firmware on an STM32L476 is set up to run a small model on those frames.",
        "The main board is assembled. It has two servo headers, a linear-actuator connector, a battery connector, a programming header, and the flat-cable socket. One servo closes the four fingers together. The other moves the thumb. The actuator swings the arm. The hand is modeled as a linkage driven by those two servos. The sensor boards are in layout, one version for the hub and one for the modules along the band.",
        "Power comes from a two-cell lithium-polymer pack with its own protection circuit. A buck converter steps the pack down, a ferrite bead follows it, and a linear regulator on each board supplies the converters and the microcontroller. On the sensor boards the electrode pads are on an outer layer, with inner ground and power planes between those pads and the digital wiring.",
      ],
    },
    {
      title: "VECTOR Electromagnet Array",
      year: "Spring 2026",
      summary:
        "This is a small physical display made of electromagnets and a magnetic liquid. Turning a coil on pulls the liquid onto that spot, so the device can draw a shape you can see. One mode shows the current time as a series of digits. The other slides a bar of liquid from one side of the grid to the other. I built the magnet plate, the electronics that switch the coils, and the program that runs the two modes.",
      tags: ["ATmega328PB", "I2C", "Electromagnets", "Ferrofluid"],
      images: [
        {
          src: "assets/vector-prototype.jpg",
          alt: "Acrylic prototype with a 3 by 5 electromagnet plate, an LCD reading Mode Time, and a breadboard inside the case",
          caption: "The prototype. The LCD shows time mode and the live Hall-sensor reading.",
        },
        {
          src: "assets/vector-cad.jpg",
          alt: "CAD model of the electromagnet faceplate, LCD bracket, and mounting plate",
          caption: "CAD of the array plate and the LCD mount.",
        },
      ],
      highlights: [
        "What it does: magnetic liquid rests on a bed of electromagnets. Coils that are switched on pull the liquid into a visible pattern. The clock mode paints the time one character after another. The draw mode drags a stripe of liquid across the bed. The sections below are the hardware and the program that create those patterns.",
        "The prototype is a clear case with an acrylic plate of electromagnets, a breadboard, an LCD, and a Hall sensor. Ferrofluid on the coils moves when individual magnets turn on. Time mode reads a clock chip and lights one symbol at a time: the hour, a colon, then the minutes. Draw mode turns on a full column and steps that column across the grid.",
        "An ATmega328PB writes coil patterns over I2C to two solenoid driver boards. Those boards use port expanders, MOSFETs, and flyback diodes. The microcontroller, a DS3231 real-time clock, the LCD, and both drivers share that bus. A bench supply powers the drivers with a current limit set. The LCD shows whether the system is in time mode or draw mode, and it shows the live Hall-sensor reading.",
        "A switch selects the mode. The firmware reads the switch in the main loop, updates the display, and applies the coil pattern. Digit shapes are stored as bitmaps and copied out to the drivers. I brought the system up as coils and drivers first, then the Hall sensor, then the clock, switch, and display, then the two modes. The first coil plate was a press fit. The coils were later screwed into threaded inserts so the faces sit on one plane. A sealed acrylic reservoir stained, so the fluid sits on the coil faces.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Nathan54564/final-project-s26-t5" },
      ],
    },
    {
      title: "Analog Metal Detector",
      year: "Spring 2026",
      summary:
        "This is a handheld metal detector with no computer in it. You sweep a coil at the end of a wand over a surface, and a speaker in the handle changes pitch when the coil passes over metal. I designed the circuit, simulated it, built the circuit board, wound the coil, and tested the finished wand.",
      tags: ["LTspice", "LC oscillator", "MOSFET", "PCB"],
      images: [
        {
          src: "assets/detector-wand.jpg",
          alt: "Metal detector wand with a copper search coil on a PVC shaft and a green circuit board at the handle",
          caption: "The wand: hand-wound search coil, shaft, and the detector board.",
        },
        {
          src: "assets/detector-board.jpg",
          alt: "Assembled green detector board with DIP MOSFET arrays, blue potentiometers, and a speaker",
          caption: "The board, with the speaker, bias pots, and ALD MOSFET arrays.",
        },
        {
          src: "assets/detector-layout.jpg",
          alt: "PCB layout of the metal detector, red soldermask with the search-coil pad and speaker footprint",
          caption: "Layout of the same board.",
        },
        {
          src: "assets/detector-schematic.jpg",
          alt: "LTspice schematic of two LC oscillators, a MOSFET mixer, and a speaker driver",
          caption: "LTspice schematic: oscillators, mixer, and the speaker driver.",
        },
      ],
      highlights: [
        "What it does: the round coil at the end of the wand is the sensor. Passing it over metal changes an electrical tone in the speaker at the handle. The whole signal path is analog circuitry on one board. The sections below are that circuit, how I built it, and what I measured when I brought metal up to the coil.",
        "The detector is a wand with a hand-wound search coil at one end and a circuit board at the handle. The board holds two LC oscillators, a mixer, amplifier stages, and a speaker driver, all analog. One oscillator uses a fixed inductor. The other uses the search coil. Metal near the coil changes its inductance, that oscillator's frequency moves, and the speaker tone changes.",
        "I drew the full circuit, simulated it in LTspice, then laid out and assembled a board with ALD MOSFET arrays, bias potentiometers, and an IRLB8721 source follower into the speaker. The two oscillator outputs are combined and passed through a nonlinear stage that produces a lower-frequency beat. On the bench the low-pass capacitors reduced that beat, so I removed them and left the later stages in the chain.",
        "I measured both oscillators with no metal and again with metal at the coil, and compared the readings with the simulation. The reference oscillator landed close to the simulated frequency. The wound coil sat lower than its simulation, and metal shifted it in the same direction as a lower inductance in the model. The speaker, the coil, and the board are mounted as one wand. The lab report is linked on the card.",
      ],
      links: [
        { label: "Report", href: "assets/metal-detector-report.pdf" },
      ],
    },
    {
      title: "Sift",
      year: "Spring 2026",
      summary:
        "Sift is a desktop app for finding a file when you do not remember its name. You type a description of what you want, and the app lists matching documents and pictures from a folder, then lets you open one or ask a question about it. I built the window you interact with and the piece that starts the search program when the app opens. It won a MongoDB prize at YHack.",
      tags: ["Tauri", "MongoDB Atlas", "Gemini", "FastAPI"],
      images: [
        {
          src: "assets/sift-winner.png",
          alt: "Sift logo on a brown card with a gold winner ribbon",
          caption: "YHack Spring 2026, MLH Best Use of MongoDB Atlas.",
        },
      ],
      highlights: [
        "What it does: you describe a file in words, and Sift searches a folder for documents and images that match the description, even when the filename does not contain those words. From the same window you can preview a result, ask a question about the file, or have the app move and sort files. The sections below are the search system and the desktop app I built around it.",
        "Sift indexes a folder and retrieves files from a written query. PDFs, images, and text files are embedded with a Gemini model and stored in MongoDB Atlas with a vector search index. A query is embedded the same way and matched against that index. The search drops weak matches and shortens the list where the scores fall off. A separate script can ingest one file or walk a directory.",
        "I built the desktop application in Tauri, with Rust starting the local Python server. Closed, the window is a small sprite. Open, it has chat, files, and preview tabs. Chat sends text to the assistant. The files tab lists the paths that came back. Preview shows the file you select. On launch the app waits until the server is accepting connections. File paths stay inside a configured folder.",
        "The assistant, running on a Gemini chat model through a local API, can search the index, answer a question about selected files, and run a plan. A plan can create a folder, move a file, add a file to the index, or send a file to the trash. The plan is shown before it runs. The last plan or trash action can be undone. The project won MLH Best Use of MongoDB Atlas at YHack Spring 2026.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Nathan54564/yhacks_s26_SIFT" },
        { label: "Devpost", href: "https://devpost.com/software/sift-b7ctar" },
        { label: "Demo", href: "https://youtu.be/e-kfnXJfcwQ" },
      ],
    },
    {
      title: "Connect 4 AI Player",
      year: "Sep 2025",
      summary:
        "This is a physical Connect 4 game that plays against you. The board is a grid of colored lights in a clear box. You press a button to take your turn, a camera looks at the lights, and a small computer in the box chooses its own move and lights it up. I built the board and the program that sees the grid and picks the move. You do not need a laptop to play.",
      tags: ["ESP32", "TinyML", "CNN", "Connect 4"],
      images: [
        {
          src: "assets/connect4-board.jpg",
          alt: "Connect 4 prototype in a clear box, with a lit LED matrix, camera board, and button breadboards",
          caption: "The board: LED matrix, XIAO camera, and the column buttons.",
        },
        {
          src: "assets/connect4-pipeline.jpg",
          alt: "System pipeline from a camera image of the LED matrix, through 64 tile crops and a CNN, to minimax and the best move",
          caption: "The pipeline: 64 tiles, a CNN label on each LED, then minimax picks the move.",
        },
      ],
      video: {
        src: "assets/connect4-demo.mp4",
        caption: "A turn on the physical board. The camera reads the LEDs, then the matrix shows the AI move.",
      },
      highlights: [
        "What it does: two players, you and the board, take turns dropping a colored piece into a column. Your piece is a button press. The board looks at its own lights with a camera, decides a legal reply, and turns on the lights for its piece. The sections below are the physical board and the program running inside it.",
        "The hardware is an LED matrix in a clear box, a camera on a XIAO ESP32-S3, and a row of column buttons on breadboards. The chip photographs the matrix, labels every cell empty, red, or blue, chooses a move, and lights that move on the matrix. The whole turn stays on the chip.",
        "I collected full-board photos with that camera and cut each photo into one tile per cell, then labeled the tiles. The classifier is a small convolutional network with the weights stored as small integers so the model fits on the chip. I checked it on tiles that were held out of training. The column buttons share one analog input through a resistor ladder, and the firmware maps that reading to a column.",
        "With the board state known, minimax with alpha-beta pruning selects the move. The search runs to a fixed depth, looks for an immediate win or block before searching, and tries the center columns first. The chosen column is written out to the LED matrix. A video of a turn on the physical board is in the project.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Nathan54564/Connect-4-AI-Player" },
        { label: "Demo", href: "https://youtu.be/cvaqpiKe06Y" },
      ],
    },
    {
      title: "Flexible Piezoelectric Cardiovascular Sensor",
      year: "2025",
      summary:
        "This is a thin patch that records a heartbeat from the skin. A soft film flexes with the pulse and produces a small electrical signal, and a flexible circuit board turns that into a recording you can take without sitting at a lab bench. I designed that circuit board. It was used on the wrist, the neck, and the chest, and the work was published as a first-author paper.",
      tags: ["Flex PCB", "AD548", "Piezoelectric", "P(VDF-TrFE)"],
      images: [
        {
          src: "assets/piezo-pcb.jpg",
          alt: "Flexible polyimide charge-amplifier board next to a piezoelectric sensor, with a 1 cm scale",
          caption: "Charge-amplifier board on 25 μm polyimide, shown flat and bent, next to the sensor.",
        },
        {
          src: "assets/piezo-stack.jpg",
          alt: "Gloved hand holding a sensor stack labeled PDMS, CNT, and PVDF film",
          caption: "Sensor stack: PDMS, carbon nanotube electrodes, and the piezoelectric film.",
        },
      ],
      highlights: [
        "What it does: the soft film is placed on the skin and moves with the pulse. That motion becomes a small electrical signal, and the flexible board I designed amplifies it into a trace that can be recorded away from a lab bench. The sections below are the film, the board, and the recordings.",
        "The sensor is a soft stack of silicone, carbon-nanotube electrodes, and a P(VDF-TrFE) film, with the film in the middle and the same layers repeated on the other side. The circuit is a charge amplifier on a thin polyimide board, built around an AD548. I laid out that board. It connects to the film and reads it while worn, without a separate bench amplifier. Photos show the board both flat and bent, next to the stack.",
        "The film was annealed, which increased the useful crystal phase and the measured sensitivity. A long repeated-load test did not show a clear drop in the signal. Worn, the same board recorded a radial pulse at the wrist, a carotid pulse at the neck, and a chest-wall signal with the two peaks used for an augmentation index. The work is a first-author letter in ACS Applied Electronic Materials.",
      ],
      links: [
        { label: "Paper", href: "https://doi.org/10.1021/acsaelm.5c02070" },
      ],
    },
    {
      title: "Penn Aerial Robotics",
      year: "2025",
      summary:
        "I worked out the size and shape of the flying surfaces for two student competition airplanes, using simulation rather than building the airframes myself. For one airplane I sized the wing, the tail, and the servos that move the control surfaces, for a plane that carries water and has a limited motor. For the other I sized a wing and a V-shaped tail for a plane that lifts off vertically and then flies forward, and I modeled the tail boom and compared rib designs where the wing attaches. That second airplane placed third nationally.",
      tags: ["XFLR5", "FEA", "S1223", "NACA 4412", "SAE Aero"],
      images: [
        {
          src: "assets/pennair-boom.jpg",
          alt: "CAD model of a carbon tail boom with servo mounts and a tail surface",
          caption: "Advanced Class tail boom. Carbon tube, servo housings, and the tail surface.",
        },
        {
          src: "assets/pennair-fea.jpg",
          alt: "FEA stress plots for three wing-connection rib designs",
          caption: "Wing-connection rib FEA. Rib 1: 3.48 MPa, factor of safety 2.01. Rib 2: 2.85 MPa, 2.46. Rib 3: 1.57 MPa, 4.46.",
        },
        {
          src: "assets/pennair-wing.jpg",
          alt: "XFLR5 model of a rectangular main wing, 1.00 m span and 0.20 m chord",
          caption: "Micro Class main wing in XFLR5. Rectangular planform, 1.00 m span, 0.20 m chord, aspect ratio 5.",
        },
        {
          src: "assets/pennair-tail.jpg",
          alt: "XFLR5 model of a symmetric elevator, 0.40 m span",
          caption: "Horizontal tail in XFLR5, symmetric section, 0.40 m span.",
        },
      ],
      highlights: [
        "What I produced: dimensions and simulation results the airplanes were built from, not the finished aircraft. For the cargo plane, that was the wing, the tail, and the servo sizes. For the vertical-takeoff plane, that was the wing, the V-tail, a model of the tail boom, and a comparison of the ribs that attach the wing. The sections below go through those two airplanes.",
        "For the smaller SAE Aero Design airplane I sized the wing, the tail, and the control-surface servos. The airplane carries a water payload under a power limit. I set a takeoff speed from the power and thrust I was using, then modeled an S1223 wing with a rectangular planform in XFLR5, along with a conventional tail. Hinge moments from that model, across a sweep of angles, were converted into a servo torque requirement with a safety factor, and the servos were selected from that requirement.",
        "For the three-motor airplane I sized a cruise wing, a V-tail, and the tail boom. The wing is a tapered NACA 4412 with washout. In XFLR5 I compared that wing with a plain rectangle and ran a stability check. I set the tail arm, the tail area, and the angle between the two tail surfaces in the same model. The boom is a CAD model: a carbon tube, servo housings, and the tail surface. That airplane placed third nationally.",
        "I also ran finite-element analysis on three shapes for the ribs that join the wing to the body. For each rib I recorded peak stress, factor of safety, and mass under the same load case.",
      ],
    },
    {
      title: "Three-Base Truss ROS Simulation",
      year: "2025",
      summary:
        "This is a simulation of three small robots linked into a triangle. The links between them grow and shrink on a timer, and the triangle stretches and changes shape on screen. I wrote the simulation and checked that the picture matches a graph of the three link lengths, with Professor Cynthia Sung.",
      tags: ["ROS", "Simulation", "Truss", "Python"],
      images: [
        {
          src: "assets/truss-sim.jpg",
          alt: "3D view of three mobile bases linked by red arms in a triangle",
          caption: "Three bases and the arms between them. Each link length follows its own sine wave.",
        },
        {
          src: "assets/truss-plot.jpg",
          alt: "Plot of arm AB, BC, and CA lengths oscillating over time",
          caption: "Arm AB, BC, and CA lengths, out of phase, between about 0.90 and 1.10.",
        },
      ],
      highlights: [
        "What it does: three robot bases stay linked while the arms between them extend and retract on a schedule. The triangle on screen changes shape for as long as the simulation runs. A graph next to it shows the length of each arm over time. I wrote this simulation and checked the picture against the graph with Professor Cynthia Sung.",
        "The simulation places three mobile bases at the corners of a triangle, with an extendable arm on each side, labeled AB, BC, and CA. Each arm length follows a sine wave, and the three waves are shifted in phase, so the triangle changes shape as the simulation runs. A ROS node, chrono_triangle_sim_node, prints every arm length at each timestep.",
        "I plotted those logs. The three traces stay out of phase and remain near the starting length. I compared the plot with the 3D view of the bases and the red links, with Professor Cynthia Sung. The view shows the bases and arms moving in line with the logged lengths.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Nathan54564/nathan_TRUSSES" },
      ],
    },
    {
      title: "Analog Synth",
      year: "Spring 2025",
      summary:
        "This is a small music synthesizer in a printed box, with no computer inside. Knobs on top change the pitch and the tone, and cables can do the same job from other equipment. It produces two sounds, a buzzy sawtooth and a thinner pulse, on separate outputs. I designed the circuit, built the board, and printed the case.",
      tags: ["Altium", "Analog", "SolidWorks", "Synth"],
      images: [
        {
          src: "assets/anton-prototype.jpg",
          alt: "Purple 3D-printed oval synthesizer with four knobs and a red jack on a desk",
          caption: "The printed prototype. Pots and switches wire down to the board inside.",
        },
        {
          src: "assets/anton-cad.jpg",
          alt: "Blue SolidWorks render of the oval synth enclosure, knobs, and side jacks",
          caption: "SolidWorks model of the enclosure, panel, and jacks.",
        },
        {
          src: "assets/anton-pcb.jpg",
          alt: "3D render of the green synthesizer PCB with connectors, op-amps, and a power header",
          caption: "The board: oscillator, buffers, and the panel connectors.",
        },
        {
          src: "assets/anton-schematic.jpg",
          alt: "Altium schematic of the synth oscillator with saw and pulse outputs",
          caption: "Top-level schematic: oscillator core, pulse-width stage, and the saw and pulse outputs.",
        },
      ],
      highlights: [
        "What it does: the box makes sound, or a signal you can send to other music gear, from knobs on the lid. One output is a sawtooth wave, the bright buzzy tone. The other is a pulse wave, a hollower tone whose shape you set with a knob. Pitch is two knobs, coarse and fine. The sections below are the circuit inside the box and the printed case.",
        "The synthesizer is one analog board with a sawtooth output and a pulse output, running from positive and negative supply rails. Coarse and fine knobs set the pitch. Another control sets the pulse width. Jacks accept external voltages for pitch and for pulse width. The two waveforms leave on separate jacks. A temperature-compensation network sits on the oscillator core, and a buffer follows the core into the pulse-width stage.",
        "I started from a published oscillator schematic, then drew the full schematic in Altium, laid out the board, and wired the panel potentiometers, switches, and LED to it. The enclosure was modeled in SolidWorks and printed in purple. The knobs are on the top face. The board is mounted inside the housing. A rendered version of the case shows the same knob layout and a row of jacks on the side.",
      ],
    },
    {
      title: "Maze Game",
      year: "Dec 2024",
      summary:
        "This is a maze game on the computer. Each time you start, it draws a brand-new maze. You move a square with the arrow keys, dodge enemies that pace back and forth and tiles that knock you out, and you can stand on a checkpoint so a death does not send you back to the entrance. The screen keeps score with deaths and time. I wrote the maze generator and the game.",
      tags: ["Java", "Swing", "Maven"],
      images: [
        {
          src: "assets/maze-play.jpg",
          alt: "Maze gameplay with walls, green enemies, red death tiles, and a timer",
          caption: "A generated maze. Green blocks patrol, red tiles are lethal, and the flag is the exit.",
        },
        {
          src: "assets/maze-start.jpg",
          alt: "Instructions screen for The Awesome Maze Game",
          caption: "Instructions screen before the run starts.",
        },
      ],
      highlights: [
        "What it does: starting the program creates a maze, shows a short instruction page, then lets you walk a square through the corridors. Enemies pace in the halls, some floor tiles are hazards, white tiles are checkpoints, and a checkered tile is the exit. Deaths and time stay on screen. I wrote both the generator that draws the maze and the game you play.",
        "The game builds a new maze at startup. A stack-based recursive backtracker starts on a cell, steps to an unvisited neighbor, removes the wall between them, and backtracks when a cell has nowhere new to go. The finished maze connects every open cell, and it has no loops. The generator lives in its own Java class and runs before the play screen appears.",
        "Arrow keys move a yellow square. Green blocks patrol in a straight line and reverse when they hit something. Touching one sends the player to the last white save block that was activated. Red tiles end the current life, and some of them blink on and off. A checkered tile ends the run. The window opens on an instructions card, then switches to the maze. A side panel counts deaths and elapsed time.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Nathan54564/Maze_Game" },
      ],
    },
    {
      title: "ReVita CPR Glove",
      year: "2024",
      summary:
        "This is a glove for CPR practice. While you compress a mannequin, it measures how hard and how fast you are pushing and tells you to adjust. A beep sets the rhythm, a screen on the wrist gives the feedback, and the same information shows up on a phone. I built the sensors, the electronics, the wrist display, and the cuff that holds them.",
      tags: ["ESP32", "MPU6050", "FSR", "Blynk", "CPR"],
      images: [
        {
          src: "assets/cpr-glove.jpg",
          alt: "CPR training glove on a wrist, with a 3D-printed cuff, battery, display, and a sensor on the fingertip",
          caption: "Worn prototype: cuff, battery, display, and a sensor at the fingertip.",
        },
        {
          src: "assets/cpr-dashboard.jpg",
          alt: "Blynk dashboard showing compression frequency at 106 BPM and force exerted",
          caption: "Blynk dashboard. Frequency in BPM, force, and timing and pressure alerts.",
        },
        {
          src: "assets/cpr-circuit.jpg",
          alt: "Circuit diagram with a microcontroller, force sensor, accelerometer, speaker, switch, and LCD",
          caption: "Circuit: microcontroller, MPU6050, force sensor, speaker, and LCD.",
        },
        {
          src: "assets/cpr-cuff.jpg",
          alt: "3D-printed wrist cuff with Velcro, sitting on a green circuit board",
          caption: "3D-printed cuff with Velcro, from the SolidWorks prototype.",
        },
      ],
      highlights: [
        "What it does: you wear it and perform compressions. It listens to how fast you are going and how hard you are pushing, compares that with the rhythm from a speaker, and tells you harder, lighter, slower, or faster. The message is on a small screen strapped to the wrist and on a phone dashboard. I built the glove electronics and the cuff.",
        "The glove measures compression rate and force during CPR practice. An MPU6050 on the hand registers each compression from the motion, and the time between compressions is displayed as a rate. A force-sensitive resistor reads how hard the push is. A speaker plays a metronome. An LCD on the cuff reports force as harder, lighter, or good, and pace as slow, fast, or good. Those are two separate messages.",
        "An ESP32 sends rate, force, and alerts to a Blynk page on a phone. The LCD and the metronome keep running if that link is down. I drew the cuff in SolidWorks, printed it, and added Velcro. The circuit, including the accelerometer, force sensor, speaker, and display, was soldered into the cuff and a work glove.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Nathan54564/ESE-1110-" },
      ],
    },
    {
      title: "Biosignal Whack-a-Mole",
      year: "2024",
      summary:
        "This is a Whack-a-Mole game you play with your body instead of a keyboard. Moles appear on a grid on the screen. Flexing your forearm swings the hammer, and tapping one of four pads moves the hammer to another hole. I built the pads, connected the muscle sensor and the pads to the game, and ran it as a demo.",
      tags: ["Arduino", "Unity", "EMG", "TENG", "AD620"],
      images: [
        {
          src: "assets/whack-game.jpg",
          alt: "Unity game view of Whack-a-Mole, with score 2 and 25 seconds left",
          caption: "Game view. Score and the WHACK A MOLE countdown sit over a 3×3 of holes.",
        },
        {
          src: "assets/teng-buttons.jpg",
          alt: "Four contact-separation TENG buttons marked up, down, left, and right",
          caption: "TENG buttons marked up, down, left, and right, for moving the hammer between holes.",
        },
      ],
      highlights: [
        "What it does: it is a normal Whack-a-Mole round on a computer, with a timer and a score, except the controls are on your body. A sensor on the forearm reads a muscle contraction and that swing hits the mole. Four pads on the table, one for each direction, move you between holes. I built the pads and wired both inputs into the game.",
        "The Unity scene is a timed Whack-a-Mole round on a grid of holes. The hammer swings, plays a sound, and scores when it hits a mole. A countdown ends the round and the game waits for a restart. A forearm EMG signal comes in from an Arduino on a serial port. Crossing a threshold swings the hammer, which is also what the space bar does.",
        "Four pads made from carbon tape on PET and nylon are labeled up, down, left, and right. A tap steps the hammer across the grid. The pad voltage goes through an AD620 before it is read. I measured taps on those pads on the bench. Before this scene, the same EMG reading was sent into Unity as a force on a block, and a separate glove test used an ultrasound sensor with a vibration cue when the hand got too close.",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/Nathan54564/WHACK-A-MOLE" },
      ],
    },
  ],

  experience: [
    {
      role: "Electrical Engineering Co-op",
      org: "Hologic",
      dates: "May 2026 – August 2026",
      location: "Newark, DE",
      summary:
        "Co-op on Hologic imaging systems. I supported an end-of-life board replacement on the Horizon DXA bone-density system, including emissions debug, and I traced touch and display failures on Trident down to either the hardware or the firmware.",
      highlights: [
        "I supported an end-of-life board change on the Horizon DXA system and the emissions work that went with it. Using a spectrum analyzer and near-field electric and magnetic probes, I mapped emissions associated with clocks, a data bus, and a cable harness.",
        "On Trident I worked through touch and display failures. I checked the supply rails with an oscilloscope and a meter, then followed the touch bus, the LVDS video link, and the backlight. I read the schematic and the firmware and swapped boards between a failing unit and a working unit to see whether the fault stayed with the board.",
      ],
    },
    {
      role: "Student Researcher",
      org: "New Jersey Institute of Technology",
      dates: "May 2025 – September 2025",
      location: "Newark, NJ",
      summary:
        "Internship on a wearable piezoelectric cardiovascular sensor. I designed the flexible charge-amplifier board that reads an electrospun P(VDF-TrFE) film on the body. The work is a first-author letter in ACS Applied Electronic Materials.",
      highlights: [
        "I laid out a charge amplifier on thin polyimide around an AD548 and connected it to an electrospun P(VDF-TrFE) film so the sensor could be read on the body.",
        "The film stack is silicone, carbon-nanotube electrodes, and the piezoelectric film. Annealing raised the film's sensitivity. The board recorded radial, carotid, and chest-wall signals, and the sensor completed a long cyclic load test. The work is a first-author letter in ACS Applied Electronic Materials.",
      ],
      href: "#projects",
    },
    {
      role: "Student Researcher",
      org: "New Jersey Institute of Technology",
      dates: "May 2024 – August 2024",
      location: "Newark, NJ",
      summary:
        "Summer research on wearable sensing for human-machine interfaces. The piece I took through to a demo was a Whack-a-Mole game driven by EMG and TENG buttons.",
      highlights: [
        "I built the Arduino-to-Unity Whack-a-Mole demo, with a forearm EMG signal for the swing and four TENG pads for direction, and ran it at a pre-college event.",
        "I characterized the pads on the bench and paired HC-05 modules as master and slave between two Arduino boards. Before the game, I drove a Unity object from the EMG signal and from an ultrasound sensor on a glove, with a vibration actuator when the hand got too close.",
      ],
      href: "#projects",
    },
  ],
};
