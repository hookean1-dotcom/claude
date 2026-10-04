/* ==========================================================
   UNIT 4 SECTION B · Options (candidates answer ONE)
   ========================================================== */
TOPICS.push({
  id: 'A', unit: 'O', title: 'Alternating Currents', short: 'rms, reactance, RCL, resonance',
  summary: 'Option A: describing sinusoidal ac, using an oscilloscope, reactance of capacitors and inductors, series RCL circuits, phasors and resonance.',
  spec: [
    "(a) Faraday’s law applied to a coil rotating in a magnetic field",
    "(b) Flux linkage of a rotating flat coil is BAN cos ωt (θ = ωt)",
    "(c) The induced emf V = ωBAN sin ωt",
    "(d) Frequency, period, peak value and rms value of alternating pds and currents",
    "(e) The rms value relates to energy dissipated; I_rms = I₀/√2, V_rms = V₀/√2 (including V_rms = BANω/√2)",
    "(f) Mean power in a resistor P = IV = I²R = V²/R with rms values",
    "(g) Use an oscilloscope to measure ac and dc voltages and currents, and frequencies",
    "(h) Current lags pd by 90° in an inductor",
    "(i) Inductive reactance X_L = V_rms/I_rms = ωL",
    "(j) Current leads pd by 90° in a capacitor; X_C = V_rms/I_rms = 1/ωC",
    "(k) The mean power dissipated in an inductor or capacitor is zero",
    "(l) Add pds in series RC, RL and RCL combinations using phasors",
    "(m) Calculate phase angle and impedance Z = V_rms/I_rms",
    "(n) Derive the resonance frequency of an RCL series circuit",
    "(o) Q factor = V_L/V_R = V_C/V_R at resonance",
    "(p) The sharpness of resonance is determined by the Q factor"
  ],
  learn: [
    { h: 'Generating ac: the rotating coil', html: `
<p>A flat coil of N turns and area A rotates at constant angular velocity ω in a uniform field B. The angle between the coil’s normal and the field is θ = ωt, so the flux linkage is</p>
<div class="box eq">$NΦ = BAN@,"cos"@,ωt$</div>
<p>By Faraday’s law the induced emf is minus the rate of change of flux linkage, which gives</p>
<div class="box eq">$V = ωBAN@,"sin"@,ωt$</div>
<p>The peak emf is V₀ = ωBAN (when the coil plane is parallel to B), and the frequency is f = ω/2π. So $V_{rms} = @frac{BANω}{@sqrt{2}}$.</p>` },
    { h: 'Describing ac', html: `
<p>A sinusoidal alternating pd: $V = V_0@,"sin"@,2πft$. V<sub>0</sub> is the peak value; peak-to-peak = 2V<sub>0</sub>; period T = 1/f. UK mains: 230 V rms, 50 Hz.</p>
[[d:ac-rms]]
<div class="box def"><b class="lbl">Root mean square</b><p>The <b>rms value</b> of an alternating current is the value of the steady direct current that would dissipate energy at the same rate in a given resistor. For a sinusoid:</p><p style="text-align:center">$V_{rms} = @frac{V_0}{@sqrt{2}}$ &nbsp;&nbsp; $I_{rms} = @frac{I_0}{@sqrt{2}}$</p></div>
<p>Mean power in a resistor: $P = I_{rms}V_{rms} = I_{rms}^2R = @frac{1}{2}I_0V_0$. Peak power is I<sub>0</sub>V<sub>0</sub>, twice the mean.</p>
<div class="box def"><b class="lbl">The oscilloscope</b><p>Vertical: Y-gain (V/div) × number of divisions → pd (for ac read the peak or peak-to-peak height; for dc the trace is a horizontal line displaced from zero). Horizontal: time-base (s/div or ms/div) × divisions for one cycle → period T; f = 1/T. A current is measured as the pd across a known resistor (I = V/R). A PC-based oscilloscope (via USB or sound card) works in the same way.</p></div>` },
    { h: 'Reactance', html: `
<p><b>Capacitor</b>: charge flows on and off the plates each half-cycle, so ac “passes”. Its opposition is the <b>capacitive reactance</b> $X_C = @frac{V_{rms}}{I_{rms}} = @frac{1}{ωC} = @frac{1}{2πfC}$ (Ω). The current <b>leads</b> the pd by 90° (π/2). X<sub>C</sub> falls as f rises.</p>
<p><b>Inductor</b>: a changing current induces a back emf (self-induction) that opposes the change. <b>Inductive reactance</b> $X_L = @frac{V_{rms}}{I_{rms}} = ωL = 2πfL$ (Ω), where L is the inductance (henry, H). The current <b>lags</b> the pd by 90°. X<sub>L</sub> rises with f.</p>
<p>In a resistor, pd and current are in phase. The <b>mean power</b> dissipated in an ideal inductor or capacitor is <b>zero</b>: energy is stored and returned each cycle.</p>
<p>Phasor treatment of <b>RC</b> and <b>RL</b> circuits is the same as RCL with the missing component’s pd set to zero: e.g. RC: $V^2 = V_R^2 + V_C^2$, $Z = @sqrt{R^2 + X_C^2}$.</p>` },
    { h: 'Series RCL circuits and phasors', html: `
<p>In series the <b>current</b> is common to all components, so draw it as the reference phasor. V<sub>R</sub> is in phase with I; V<sub>L</sub> leads by 90°; V<sub>C</sub> lags by 90°. The supply pd is the phasor sum:</p>
<div class="box eq">$V^2 = V_R^2 + (V_L - V_C)^2$ &nbsp;&nbsp; $Z = @sqrt{R^2 + (X_L - X_C)^2}$</div>
<p>Impedance Z = V/I (rms or peak). The phase angle between supply pd and current: $"tan"@,φ = @frac{X_L - X_C}{R}$.</p>
<div class="box warn"><b class="lbl">Watch out</b><p>The component rms pds do <b>not</b> add arithmetically to the supply rms pd — they are out of phase. V<sub>L</sub> or V<sub>C</sub> can even be larger than the supply pd.</p></div>` },
    { h: 'Resonance', html: `
<p>At the resonant frequency X<sub>L</sub> = X<sub>C</sub>, so Z = R (minimum), the current is maximum and in phase with the supply pd:</p>
<p><b>Deriving it:</b> resonance occurs when X<sub>L</sub> = X<sub>C</sub>: ω₀L = 1/ω₀C, so ω₀² = 1/LC and</p>
<div class="box eq">$f_0 = @frac{1}{2π@sqrt{LC}}$</div>
[[d:lcr-res]]
<p>The <b>Q factor</b> measures the sharpness of resonance: $Q = @frac{V_L}{V_R} = @frac{V_C}{V_R} = @frac{2πf_0L}{R}$ at resonance. A small R gives a large Q and a sharp peak — good selectivity when tuning a radio to one station while rejecting neighbouring frequencies.</p>` }
  ],
  eqs: [['NΦ = BAN@,"cos"@,ωt', 'rotating coil'], ['V = ωBAN@,"sin"@,ωt', 'induced emf'], ['V_{rms} = @frac{V_0}{@sqrt{2}},  I_{rms} = @frac{I_0}{@sqrt{2}}', ''], ['X_C = @frac{1}{ωC}', 'capacitive reactance'], ['X_L = ωL', 'inductive reactance'], ['Z = @sqrt{R^2 + (X_L - X_C)^2}', 'impedance'], ['"tan"@,φ = @frac{X_L - X_C}{R}', 'phase angle'], ['f_0 = @frac{1}{2π@sqrt{LC}}', 'resonance'], ['Q = @frac{V_L}{V_R} = @frac{V_C}{V_R}', 'Q factor at resonance']],
  worked: [
    { q: 'UK mains is 230 V rms. What is the peak pd?', s: ['V<sub>0</sub> = √2 × 230.'], a: '325 V' },
    { q: 'Find the reactance of a 10 μF capacitor at 50 Hz.', s: ['X<sub>C</sub> = 1/(2π × 50 × 10 × 10<sup>−6</sup>).'], a: '318 Ω' },
    { q: 'A series circuit has L = 0.10 H, C = 1.0 μF and R = 20 Ω. Find f<sub>0</sub> and Q.', s: ['f<sub>0</sub> = 1/(2π√(0.10 × 1.0 × 10<sup>−6</sup>)) = 503 Hz.', 'Q = 2πf<sub>0</sub>L/R = 2π × 503 × 0.10/20.'], a: '503 Hz; Q ≈ 16' },
    { q: 'A 100 Ω resistor and a 10 μF capacitor in series are connected to a 12 V rms, 50 Hz supply. Find Z, I<sub>rms</sub> and the phase angle.', s: ['X<sub>C</sub> = 318 Ω.', 'Z = √(100² + 318²) = 333 Ω.', 'I = 12/333 = 0.036 A.', 'tan φ = −318/100 → φ = −72.5° (current leads).'], a: '333 Ω; 36 mA; 73°' }
  ],
  pitfalls: ['Adding component pds arithmetically in an RCL circuit.', 'Using peak values when rms are asked for (or vice versa).', 'Mixing up which leads: in a capacitor, current leads pd (“CIVIL”: in C, I leads V; V leads I in L).', 'Forgetting μF → F when calculating X<sub>C</sub>.'],
  cards: [
    ['Define rms current.', 'The steady dc that would dissipate energy at the same rate in a resistor.'],
    ['V<sub>rms</sub> in terms of V<sub>0</sub>?', 'V<sub>0</sub>/√2'],
    ['Capacitive reactance?', 'X<sub>C</sub> = 1/2πfC'],
    ['Inductive reactance?', 'X<sub>L</sub> = 2πfL'],
    ['Phase in a capacitor?', 'Current leads pd by 90°.'],
    ['Phase in an inductor?', 'pd leads current by 90°.'],
    ['Impedance of series RCL?', 'Z = √(R² + (X<sub>L</sub> − X<sub>C</sub>)²)'],
    ['Resonant frequency?', 'f<sub>0</sub> = 1/2π√(LC)'],
    ['At resonance Z = ?', 'R (minimum), so current is maximum.'],
    ['Q factor at resonance?', 'V<sub>L</sub>/V<sub>R</sub> = 2πf<sub>0</sub>L/R'],
    ['Mnemonic for phase?', 'CIVIL: C – I leads V; V leads I – L.'],
    ['Induced emf in a rotating coil?', 'V = ωBAN sin ωt (peak ωBAN).'],
    ['Mean power in an ideal inductor or capacitor?', 'Zero.']
  ],
  quiz: [
    { q: 'A sinusoidal pd has peak value 17 V. Its rms value is', o: ['12 V', '8.5 V', '24 V', '17 V'], x: '17/√2.' },
    { q: 'The reactance of a capacitor', o: ['decreases as frequency increases', 'increases as frequency increases', 'is independent of frequency', 'equals its resistance'], x: 'X<sub>C</sub> ∝ 1/f.' },
    { q: 'In a pure inductor carrying ac', o: ['the pd leads the current by 90°', 'the current leads the pd by 90°', 'the pd and current are in phase', 'the pd and current are in antiphase'], x: '' },
    { q: 'At resonance in a series RCL circuit', o: ['X<sub>L</sub> = X<sub>C</sub> and the impedance equals R', 'the current is a minimum', 'X<sub>L</sub> = R', 'the impedance is a maximum'], x: '' },
    { q: 'The resonant frequency of a series circuit with L = 0.40 H and C = 10 μF is about', o: ['80 Hz', '500 Hz', '8.0 Hz', '2.0 kHz'], x: '1/(2π√(4 × 10<sup>−6</sup>)) = 79.6 Hz.' },
    { q: 'An oscilloscope trace shows one cycle across 4.0 divisions with the time-base at 5.0 ms/div. The frequency is', o: ['50 Hz', '20 Hz', '200 Hz', '0.050 Hz'], x: 'T = 20 ms.' },
    { q: 'Reducing the resistance in a series RCL circuit', o: ['makes the resonance peak sharper (higher Q)', 'changes the resonant frequency', 'makes the peak broader', 'reduces the maximum current'], x: '' },
    { q: 'The mean power dissipated in a resistor with peak current I<sub>0</sub> is', o: ['½I<sub>0</sub>²R', 'I<sub>0</sub>²R', '2I<sub>0</sub>²R', 'I<sub>0</sub>²R/√2'], x: 'I<sub>rms</sub>²R.' },
    { q: 'The unit of inductance is the', o: ['henry', 'farad', 'weber', 'tesla'], x: '' },
    { q: 'In a series RC circuit, V<sub>R</sub> = 6.0 V rms and V<sub>C</sub> = 8.0 V rms. The supply pd is', o: ['10 V rms', '14 V rms', '2.0 V rms', '48 V rms'], x: 'Phasor sum: √(36 + 64).' },
    { q: 'A coil of 200 turns and area 5.0 × 10<sup>−3</sup> m² rotates at 100 rad s<sup>−1</sup> in a 0.20 T field. The peak emf is', o: ['20 V', '0.10 V', '2.0 V', '200 V'], x: 'V₀ = ωBAN = 100 × 0.20 × 5.0 × 10⁻³ × 200.' },
    { q: 'The mean power dissipated in an ideal capacitor in an ac circuit is', o: ['zero', 'I<sub>rms</sub>V<sub>rms</sub>', '½I<sub>0</sub>V<sub>0</sub>', 'I<sub>rms</sub>²X<sub>C</sub>'], x: 'Energy stored in one quarter-cycle is returned in the next.' }
  ],
  exam: [
    { q: 'Define the rms value of an alternating current and show that the mean power dissipated in a resistor R is ½I<sub>0</sub>²R.', m: 3, ms: ['rms = value of steady dc giving same power dissipation in a resistor.', 'I<sub>rms</sub> = I<sub>0</sub>/√2.', 'P = I<sub>rms</sub>²R = I<sub>0</sub>²R/2.'] },
    { q: 'A 0.25 H inductor, 4.7 μF capacitor and 50 Ω resistor are in series with a variable-frequency supply of 6.0 V rms. Calculate the resonant frequency, the current at resonance and the pd across the inductor at resonance.', m: 5, ms: ['f<sub>0</sub> = 1/(2π√(0.25 × 4.7 × 10<sup>−6</sup>)) = 147 Hz', 'At resonance Z = R = 50 Ω', 'I = 6.0/50 = 0.12 A', 'X<sub>L</sub> = 2π × 147 × 0.25 = 231 Ω', 'V<sub>L</sub> = 0.12 × 231 = 28 V (greater than supply)'] },
    { q: 'Starting from the flux linkage BAN cos ωt of a coil rotating in a uniform field, explain how the emf V = ωBAN sin ωt arises and show that V<sub>rms</sub> = BANω/√2.', m: 3, ms: ['Faraday: emf = −rate of change of flux linkage.', 'Rate of change of BAN cos ωt is −ωBAN sin ωt, so V = ωBAN sin ωt.', 'Peak V₀ = ωBAN; V_rms = V₀/√2 = BANω/√2.'] }
  ],
  sims: ['ac'], gens: ['ac1', 'ac2', 'ac3', 'ac4']
});

TOPICS.push({
  id: 'B', unit: 'O', title: 'Medical Physics', short: 'X-rays, ultrasound, MRI, dosimetry',
  summary: 'Option B: imaging the body with X-rays, CT, ultrasound and MRI; measuring radiation dose; and diagnosis with radioactive tracers.',
  spec: [
    "(a) The nature and properties of X-rays",
    "(b) Production of X-ray spectra; controlling beam intensity and photon energy",
    "(c) High-energy X-rays in therapy; low-energy X-rays in diagnosis",
    "(d) Attenuation: I = I₀ exp(−μx)",
    "(e) X-ray imaging of soft tissue; fluoroscopy with image intensifiers for real-time images",
    "(f) Radiography techniques including digital image receptors",
    "(g) The rotating-beam X-ray CT scanner",
    "(h) Generation and detection of ultrasound with piezoelectric transducers",
    "(i) Ultrasound diagnosis: A-scans and B-scans, examples and applications",
    "(j) Acoustic impedance Z = ρc: reflection and transmission at tissue boundaries; the need for a coupling medium",
    "(k) The Doppler equation Δf/f₀ = 2v cos θ/c for blood flow",
    "(l) Magnetic resonance: precessing nuclei, resonance and relaxation time; Larmor frequency f = 42.6 × 10⁶ B",
    "(m) MRI for diagnostic information about internal structures",
    "(n) Advantages and disadvantages of ultrasound, X-ray imaging and MRI",
    "(o) The effects of α, β and γ radiation on living matter",
    "(p) The gray (absorbed dose, energy per kg) and the sievert (equivalent and effective dose)",
    "(q) Equivalent dose H = DW_R; effective dose E = HW_T",
    "(r) Radionuclides as tracers, especially technetium-99m",
    "(s) The gamma camera: collimator, scintillation counter, photomultiplier / CCD",
    "(t) PET scanning and its use in detecting tumours"
  ],
  learn: [
    { h: 'X-rays', html: `
<p>In an X-ray tube, electrons are released from a heated filament (<b>thermionic emission</b>) and accelerated through a large pd (tens to ~150 kV) onto a tungsten <b>target</b> anode. They decelerate rapidly, producing a continuous spectrum (braking radiation) plus characteristic lines from electron transitions in the target atoms.</p>
<ul><li>Maximum photon energy = electron kinetic energy = eV, so $λ_{min} = @frac{hc}{eV}$.</li>
<li>Only about 1% of the energy becomes X-rays; the rest heats the target, so tungsten (high melting point) is used, often on a <b>rotating anode</b> with oil cooling.</li>
<li>The tube current controls the <b>intensity</b>; the tube pd controls the photon energy (penetration/“hardness”).</li>
<li>An aluminium filter removes low-energy photons that would be absorbed by the skin without contributing to the image.</li></ul>
<p><b>Nature and properties:</b> X-rays are high-energy EM photons (λ ~ 10<sup>−10</sup>–10<sup>−12</sup> m). They travel in straight lines, are not deflected by fields, penetrate matter (less so for high atomic number and density), ionise, and blacken photographic film / excite fluorescent screens.</p>
<p><b>Diagnosis and therapy:</b> <b>low-energy</b> (tens of keV) X-rays are used for <b>diagnosis</b>, as they are absorbed differently by bone and soft tissue. <b>High-energy</b> (MeV) X-rays are used for <b>therapy</b> — beams aimed from several directions to destroy tumour cells while spreading the dose to healthy tissue.</p>
<h4>Attenuation</h4>
<div class="box eq">$I = I_0@,"exp"(-μx)$ &nbsp; (μ = attenuation coefficient)</div>
[[d:attenuation]]
<p>Bone (higher atomic number, denser) attenuates much more than soft tissue, giving contrast. Soft tissues differ little, so <b>contrast media</b> with high atomic number (barium meal, iodine injected into blood) are used. <p><b>Fluoroscopy</b> produces real-time moving X-ray images (e.g. following a barium meal or guiding a catheter) using an <b>image intensifier</b>, which converts the X-ray image to light, then electrons that are accelerated and focused onto a small bright screen. <b>Digital image receptors</b> (flat-panel detectors) replace film: the image is available immediately, can be processed and stored, and usually needs a lower dose.</p>
<p><b>CT scanning</b>: an X-ray tube and ring of detectors rotate around the patient; a computer reconstructs cross-sectional “slices” and 3-D images — excellent detail, but a higher dose.</p>` },
    { h: 'Ultrasound', html: `
<p>Ultrasound is sound above 20 kHz; medical imaging uses 1–15 MHz. A <b>piezoelectric</b> crystal (e.g. quartz, PZT) vibrates when an alternating pd is applied — generating ultrasound pulses — and produces a pd when struck by returning echoes, so one transducer both sends and receives.</p>
<div class="box eq">$Z = ρc$</div>
<p>Z is the acoustic impedance. At a boundary between tissues, the <b>greater the difference in Z</b>, the greater the fraction reflected and the less transmitted. Similar Z → mostly transmitted. Air–skin: nearly 100% reflected, so a <b>coupling gel</b> (Z close to skin) removes the air layer.</p>
<ul><li><b>A-scan</b> (amplitude): echo amplitude plotted against time; the time delay gives the depth of boundaries (distance = ct/2). Used e.g. to measure the eye.</li>
<li><b>B-scan</b> (brightness): the transducer is moved/swept; echoes shown as bright dots building a 2-D image (e.g. fetal scans).</li></ul>
<p>Ultrasound is non-ionising, cheap and portable, but cannot image through bone or air (e.g. lungs) well.</p>
<div class="box def"><b class="lbl">Doppler ultrasound</b><p>Ultrasound reflected from moving red blood cells is frequency-shifted: $@frac{Δf}{f} = @frac{2v@,"cos"@,θ}{c}$, where θ is the angle between the beam and the blood flow. Used to measure blood flow speed and detect blockages.</p></div>` },
    { h: 'MRI', html: `
<p>Hydrogen nuclei (protons) behave like tiny magnets. In a very strong uniform field (1–3 T, from a superconducting magnet) they <b>precess</b> about the field direction at the <b>Larmor frequency</b>, which is proportional to B (42.6 MHz per tesla for protons).</p>
<ol><li>A radio-frequency pulse at the Larmor frequency tips the protons out of alignment (resonance).</li>
<li>When the pulse stops, the protons relax back, emitting RF signals that are detected.</li>
<li>Relaxation times differ between tissues (e.g. fat, water, tumour), giving contrast.</li>
<li>Gradient coils vary B across the body, so the Larmor frequency identifies the position the signal came from.</li></ol>
<p>The Larmor frequency is $f = 42.6 × 10^6 B$ (Hz, B in tesla): at 1.5 T it is 63.9 MHz.</p>
<div class="tbl"><table><tr><th></th><th>Advantages</th><th>Disadvantages</th></tr><tr><td>X-ray / CT</td><td>quick, cheap (plain X-ray); excellent for bone; CT gives detailed 3-D images</td><td>ionising radiation (CT gives a large dose); poor soft-tissue contrast without contrast media</td></tr><tr><td>Ultrasound</td><td>non-ionising; cheap, portable; real-time; blood-flow studies</td><td>poor through bone and air; lower resolution; operator-dependent</td></tr><tr><td>MRI</td><td>non-ionising; excellent soft-tissue contrast; any slice orientation</td><td>expensive; slow and noisy; claustrophobic; unsuitable with some metal implants / pacemakers</td></tr></table></div>` },
    { h: 'Dosimetry and radionuclide imaging', html: `
<p><b>Effects on living matter:</b> α, β and γ radiations ionise atoms in cells, damaging DNA. This can kill cells (radiation burns, radiation sickness at high doses) or cause mutations leading to cancer. α is the most ionising, so it does the most damage per gray if the source is <b>inside</b> the body, but it cannot penetrate the skin from outside; β and γ penetrate further.</p>
<ul><li><b>Absorbed dose</b> D = energy absorbed per unit mass (gray, Gy = J kg<sup>−1</sup>).</li>
<li><b>Equivalent dose</b> H = D × W<sub>R</sub>, the radiation weighting factor (1 for X, γ, β; 20 for α). Unit: sievert (Sv).</li>
<li><b>Effective dose</b> E = H × W<sub>T</sub>, the tissue weighting factor, which reflects how sensitive each organ is; unit Sv.</li></ul>
<p><b>Tracers</b>: technetium-99m is ideal — pure γ emitter (140 keV, penetrates body but easily detected), half-life 6 h (long enough to image, short enough to limit dose), easily attached to different compounds.</p>
<p><b>Gamma camera</b>: lead collimator (only γ travelling parallel to the holes reach the crystal) → NaI scintillator crystal (γ produces flashes of light) → photomultiplier tubes (or CCD) → computer finds position of each flash → image of tracer distribution.</p>
<p><b>PET</b>: a positron-emitting tracer (e.g. fluorine-18 in glucose) concentrates in active tissue. Each positron annihilates with an electron, producing two 511 keV γ photons travelling in opposite directions. Detectors in a ring record coincident pairs; the source lies on the line joining them. PET is used to detect <b>tumours</b>, which take up the tracer faster than normal tissue.</p>` }
  ],
  eqs: [['λ_{min} = @frac{hc}{eV}', 'X-ray cut-off'], ['I = I_0e^{-μx}', 'attenuation'], ['Z = ρc', 'acoustic impedance'], ['@frac{Δf}{f} = @frac{2v@,"cos"@,θ}{c}', 'Doppler ultrasound'], ['H = DW_R', 'equivalent dose'], ['E = HW_T', 'effective dose'], ['f = 42.6 × 10^6 B', 'Larmor frequency']],
  worked: [
    { q: 'An X-ray tube operates at 80 kV. Find the maximum photon energy and minimum wavelength.', s: ['E<sub>max</sub> = eV = 1.60 × 10<sup>−19</sup> × 80 000 = 1.28 × 10<sup>−14</sup> J.', 'λ<sub>min</sub> = hc/E<sub>max</sub> = 1.99 × 10<sup>−25</sup>/1.28 × 10<sup>−14</sup>.'], a: '80 keV; 1.6 × 10<sup>−11</sup> m' },
    { q: 'In an A-scan of the eye, the echo from the back of the eye arrives 30 μs after the pulse is sent. The speed of ultrasound in the eye is 1500 m s<sup>−1</sup>. Find the depth of the eye.', s: ['The pulse travels there and back: distance = ct/2.', 'd = 1500 × 30 × 10<sup>−6</sup>/2.'], a: '2.3 cm' },
    { q: 'A material has μ = 0.50 cm<sup>−1</sup> for certain X-rays. What fraction of the intensity is transmitted through 3.0 cm?', s: ['I/I<sub>0</sub> = exp(−μx) = exp(−0.50 × 3.0).', '= e<sup>−1.5</sup> = 0.22.'], a: '22%' },
    { q: 'A 70 kg patient receives an absorbed dose of 2.0 mGy of γ radiation (W<sub>R</sub> = 1) to the lungs (W<sub>T</sub> = 0.12). Find the equivalent dose and the effective dose, and the energy absorbed if the whole body received this dose.', s: ['H = DW<sub>R</sub> = 2.0 mSv.', 'E = HW<sub>T</sub> = 2.0 × 0.12 = 0.24 mSv.', 'Energy = D × m = 2.0 × 10<sup>−3</sup> × 70 = 0.14 J.'], a: '2.0 mSv; 0.24 mSv; 0.14 J' },
    { q: 'Ultrasound of 5.0 MHz is reflected from blood moving at 0.30 m s<sup>−1</sup> at 30° to the beam (c = 1540 m s<sup>−1</sup>). Find the frequency shift.', s: ['Δf = 2fv cos θ/c = 2 × 5.0 × 10<sup>6</sup> × 0.30 × cos 30°/1540.'], a: '1.7 kHz' }
  ],
  pitfalls: ['Confusing tube current (intensity) with tube pd (photon energy).', 'Forgetting the factor of 2 in Doppler ultrasound (and in the echo distance ct/2).', 'Saying MRI uses ionising radiation.', 'Using grays and sieverts interchangeably for α radiation.'],
  cards: [
    ['How are electrons released in an X-ray tube?', 'Thermionic emission from a heated filament.'],
    ['Minimum X-ray wavelength?', 'λ<sub>min</sub> = hc/eV'],
    ['Why a rotating anode?', 'Spreads the heat (≈99% of energy) over a larger area.'],
    ['What does the tube current control?', 'Intensity (number of photons).'],
    ['Attenuation equation?', 'I = I<sub>0</sub>e<sup>−μx</sup>'],
    ['Why use a contrast medium?', 'Soft tissues attenuate similarly; high-Z media increase contrast.'],
    ['Acoustic impedance?', 'Z = ρc'],
    ['Why use coupling gel?', 'Air–skin boundary reflects almost all ultrasound; gel has Z close to skin.'],
    ['A-scan vs B-scan?', 'A: amplitude vs time (depth). B: brightness image built from many echoes.'],
    ['Larmor frequency for protons?', '42.6 MHz per tesla (∝ B).'],
    ['Define absorbed dose.', 'Energy absorbed per unit mass (Gy).'],
    ['Why is Tc-99m ideal?', 'Pure γ emitter, 6 h half-life, easily attached to compounds.'],
    ['How does PET locate a source?', 'Two 511 keV photons in opposite directions detected in coincidence.'],
    ['Effective dose equation?', 'E = H × W<sub>T</sub> (tissue weighting factor).'],
    ['What does an image intensifier do?', 'Converts an X-ray image to a bright visible image for real-time fluoroscopy.']
  ],
  quiz: [
    { q: 'The intensity of X-rays from a tube is controlled mainly by', o: ['the tube (filament) current', 'the accelerating pd only', 'the target material', 'the aluminium filter'], x: '' },
    { q: 'The minimum wavelength of X-rays from a tube operated at 100 kV is about', o: ['1.2 × 10<sup>−11</sup> m', '1.2 × 10<sup>−9</sup> m', '1.2 × 10<sup>−14</sup> m', '1.2 × 10<sup>−6</sup> m'], x: 'hc/eV.' },
    { q: 'Coupling gel is used in ultrasound imaging because', o: ['almost all ultrasound would be reflected at an air–skin boundary', 'it cools the transducer', 'it absorbs unwanted echoes', 'it increases the frequency'], x: '' },
    { q: 'Ultrasound transducers work by the', o: ['piezoelectric effect', 'photoelectric effect', 'Hall effect', 'thermionic effect'], x: '' },
    { q: 'In MRI, the Larmor frequency of protons', o: ['is proportional to the magnetic flux density', 'is independent of B', 'is in the X-ray region', 'depends on the tissue density'], x: '' },
    { q: 'Equivalent dose takes account of', o: ['the type of radiation', 'only the energy absorbed', 'the half-life of the source', 'the distance from the source'], x: 'Radiation weighting factor.' },
    { q: 'Technetium-99m is suitable as a tracer mainly because it', o: ['emits only γ and has a 6-hour half-life', 'emits α particles', 'has a half-life of many years', 'is a positron emitter'], x: '' },
    { q: 'A PET scan detects', o: ['pairs of γ photons from positron annihilation', 'X-rays transmitted through the body', 'radio signals from precessing protons', 'reflected ultrasound'], x: '' },
    { q: 'An ultrasound A-scan measures', o: ['the depth of boundaries from echo time delays', 'a 2-D image of an organ', 'blood flow speed', 'tissue density directly'], x: '' },
    { q: 'High-energy (MeV) X-rays are mainly used for', o: ['therapy — destroying tumours', 'diagnosis of broken bones', 'imaging soft tissue with fluoroscopy', 'dental X-rays'], x: 'Low-energy X-rays for diagnosis; high-energy for therapy.' },
    { q: 'Real-time X-ray images (e.g. of a barium meal moving) are produced by', o: ['fluoroscopy using an image intensifier', 'CT scanning', 'A-scan ultrasound', 'a gamma camera'], x: '' },
    { q: 'An ultrasound pulse is strongly reflected at a boundary when', o: ['the acoustic impedances on either side are very different', 'the acoustic impedances are nearly equal', 'the frequency is very low', 'coupling gel is used'], x: '' },
    { q: 'The Larmor frequency for protons in a 3.0 T MRI scanner is about', o: ['128 MHz', '14 MHz', '42.6 MHz', '3.0 MHz'], x: 'f = 42.6 × 10⁶ × 3.0.' }
  ],
  exam: [
    { q: 'Explain how X-rays are produced in an X-ray tube and why the anode rotates.', m: 5, ms: ['Filament heated → thermionic emission of electrons.', 'Electrons accelerated by high pd towards anode (target).', 'Rapid deceleration in target produces X-ray photons (continuous + characteristic).', 'Most (~99%) of energy becomes heat.', 'Rotating anode spreads heat over larger area, preventing melting.'] },
    { q: 'Compare ultrasound, X-ray and MRI imaging for examining internal structures, giving one advantage and one disadvantage of each.', m: 6, ms: ['Ultrasound advantage: non-ionising / cheap / portable / real time.', 'Ultrasound disadvantage: cannot image through bone or air / lower resolution.', 'X-ray advantage: quick, cheap, excellent for bone (CT: detailed 3-D).', 'X-ray disadvantage: ionising radiation / poor soft-tissue contrast.', 'MRI advantage: non-ionising, excellent soft-tissue contrast.', 'MRI disadvantage: expensive / slow / noisy / not with metal implants.'] }
  ],
  sims: [], gens: ['med1', 'med3', 'med4', 'med5']
});

TOPICS.push({
  id: 'C', unit: 'O', title: 'The Physics of Sports', short: 'Rotation, restitution, drag, stability',
  summary: 'Option C: stability and centre of mass, rotational dynamics and angular momentum, collisions and restitution, and the fluid forces on balls and athletes.',
  spec: [
    "(a) Use centre of gravity to explain stability and toppling in sporting contexts",
    "(b) Use the principle of moments to find forces in muscle systems in the body and in other sports (e.g. sailing)",
    "(c) Newton’s 2nd law in the form Ft = mv − mu in sporting contexts",
    "(d) Coefficient of restitution e = relative speed after ÷ relative speed before collision; e = √(h/H)",
    "(e) What is meant by moment of inertia",
    "(f) Moment of inertia equations, e.g. solid sphere I = (2/5)mr², thin spherical shell I = (2/3)mr²",
    "(g) Angular acceleration α = (ω₂ − ω₁)/t",
    "(h) Torque τ = Iα",
    "(i) Angular momentum L = Iω",
    "(j) Conservation of angular momentum in sporting contexts",
    "(k) Rotational kinetic energy = ½Iω²",
    "(l) Conservation of energy with linear and rotational KE, gravitational and elastic PE",
    "(m) Projectile motion in sporting contexts",
    "(n) Bernoulli’s equation p = p₀ − ½ρv² in sporting contexts",
    "(o) Drag force F_D = ½ρv²AC_D"
  ],
  learn: [
    { h: 'Stability and centre of mass', html: `
<p>A body on a base is stable while the vertical line through its centre of mass falls <b>inside</b> its base. If it is tilted so the line falls outside, the weight produces a toppling moment. Stability is increased by a <b>lower</b> centre of mass and a <b>wider</b> base — why wrestlers crouch with feet apart, and a sprinter in the “set” position deliberately moves the centre of mass forward, close to the edge, to start quickly.</p>` },
    { h: 'Rotational dynamics', html: `
<p>Each linear quantity has a rotational analogue:</p>
<div class="tbl"><table><tr><th>Linear</th><th>Rotational</th></tr>
<tr><td>displacement x</td><td>angular displacement θ (rad)</td></tr>
<tr><td>velocity v</td><td>angular velocity ω</td></tr>
<tr><td>acceleration a</td><td>angular acceleration α (rad s<sup>−2</sup>)</td></tr>
<tr><td>mass m</td><td>moment of inertia $I = Σmr^2$ (kg m<sup>2</sup>)</td></tr>
<tr><td>force F = ma</td><td>torque τ = Iα (N m)</td></tr>
<tr><td>E<sub>k</sub> = ½mv²</td><td>E<sub>k</sub> = ½Iω²</td></tr>
<tr><td>momentum p = mv</td><td>angular momentum L = Iω</td></tr></table></div>
<p>The moment of inertia depends on how the mass is distributed: mass further from the axis contributes much more (r²). For a <b>solid sphere</b> $I = @frac{2}{5}mr^2$; for a <b>thin spherical shell</b> $I = @frac{2}{3}mr^2$ (the shell’s mass is all at radius r, so it is larger).</p>
<p><b>Angular acceleration</b> is the rate of change of angular velocity: $α = @frac{ω_2 - ω_1}{t}$, and torque $τ = Iα$.</p>
<div class="box def"><b class="lbl">Conservation of angular momentum</b><p>If no external torque acts, the total angular momentum Iω of a system is constant.</p></div>
<p>A spinning skater who pulls in her arms reduces I, so ω increases. Her rotational KE ½Iω² = L²/2I <b>increases</b>: the extra energy comes from the work her muscles do pulling her arms in. Divers and gymnasts tuck to spin faster and open out to slow down before entry/landing.</p>` },
    { h: 'Collisions: restitution and impulse', html: `
<div class="box def"><b class="lbl">Coefficient of restitution</b><p>$e = @frac{"relative speed of separation"}{"relative speed of approach"}$. e = 1 for a perfectly elastic collision, e = 0 when the bodies stick together.</p></div>
<p>For a ball dropped from height h<sub>1</sub> bouncing to h<sub>2</sub> on a fixed surface: $e = @frac{v_2}{v_1} = @sqrt{@frac{h_2}{h_1}}$.</p>
<p>Newton’s 2nd law in the form $Ft = mv - mu$: <b>following through</b> in golf, tennis or cricket keeps the club/bat in contact longer, giving the ball a greater change of momentum. Catching a ball while drawing the hands back increases Δt and reduces the force.</p>` },
    { h: 'Fluid forces', html: `
<div class="box eq">$F_D = @frac{1}{2}ρC_dAv^2$</div>
<p>Drag increases with the square of speed, with frontal area A and with the drag coefficient C<sub>d</sub> (shape). Cyclists crouch, swimmers wear smooth suits, and at high speed drag power $F_Dv ∝ v^3$ dominates.</p>
<div class="box eq">$p = p_0 - @frac{1}{2}ρv^2$ &nbsp; (Bernoulli)</div>
<p><b>Bernoulli’s equation</b>: where a fluid moves faster relative to a surface, its pressure p is lower than the still-air pressure p₀ by ½ρv². Example: air flowing at 20 m s<sup>−1</sup> over one side of a ball (ρ = 1.2 kg m<sup>−3</sup>) has its pressure reduced by ½ × 1.2 × 20² = 240 Pa. A spinning ball drags air round with it: on one side the air flows faster relative to the ball, on the other side slower. The pressure difference gives a sideways force — the <b>Magnus effect</b> — making the ball swerve (top-spin dips, back-spin lifts, side-spin curves).</p>` },
    { h: 'Moments in the body: muscles as levers', html: `
<p>The principle of moments finds the forces in muscles and joints. In the forearm held horizontally, the <b>elbow</b> is the pivot, the <b>biceps</b> pulls upwards very close to the pivot, and the weight in the hand acts far from it.</p>
<div class="box def"><b class="lbl">Example</b><p>A 40 N weight is held 0.35 m from the elbow; the forearm’s own weight of 15 N acts 0.15 m from the elbow; the biceps is attached 0.040 m from the elbow. Moments about the elbow: F × 0.040 = 40 × 0.35 + 15 × 0.15, so F = 406 N — about ten times the load. Muscles trade force for range of movement.</p></div>
<p>The same method applies to other sports, e.g. the moments of the wind force on a sail and the crew’s weight when a sailor leans out to keep a dinghy upright.</p>` },
    { h: 'Energy and projectiles in sport', html: `
<p>Energy conservation in sport may include <b>rotational</b> kinetic energy as well as linear KE and gravitational and elastic PE. A ball rolling down a slope without slipping shares its lost GPE between both: $mgh = @frac{1}{2}mv^2 + @frac{1}{2}Iω^2$ with v = ωr. For a solid sphere this gives $v = @sqrt{10gh/7}$ — slower than a sliding object.</p>
<p>A pole vaulter converts KE → elastic PE in the pole → GPE. A trampolinist converts GPE → KE → elastic PE of the bed and back.</p>
<p><b>Projectiles</b> (Unit 1 methods): treat horizontal and vertical motion separately — a long-jumper, a shot put or a rugby kick. Ignoring air resistance, maximum range on level ground needs a launch angle of 45°; in practice drag and launch height change the best angle.</p>` }
  ],
  eqs: [['τ = Iα', 'torque'], ['α = @frac{ω_2 - ω_1}{t}', 'angular acceleration'], ['I = @frac{2}{5}mr^2', 'solid sphere'], ['I = @frac{2}{3}mr^2', 'thin spherical shell'], ['E_k = @frac{1}{2}Iω^2', 'rotational KE'], ['L = Iω', 'angular momentum'], ['Ft = mv - mu', 'Newton’s 2nd law'], ['e = @sqrt{@frac{h}{H}}', 'restitution from bounce'], ['p = p_0 - @frac{1}{2}ρv^2', 'Bernoulli'], ['F_D = @frac{1}{2}ρv^2AC_D', 'drag']],
  worked: [
    { q: 'A skater spins at 2.0 rev s<sup>−1</sup> with I = 3.0 kg m². She pulls her arms in to I = 1.2 kg m². Find her new rate of spin and the change in KE.', s: ['L conserved: 3.0 × 2.0 = 1.2 × f<sub>2</sub>, so f<sub>2</sub> = 5.0 rev s<sup>−1</sup>.', 'ω<sub>1</sub> = 4π, ω<sub>2</sub> = 10π rad s<sup>−1</sup>.', 'E<sub>1</sub> = ½ × 3.0 × (4π)² = 237 J; E<sub>2</sub> = ½ × 1.2 × (10π)² = 592 J.'], a: '5.0 rev s<sup>−1</sup>; KE increases by 355 J (work done by her muscles)' },
    { q: 'A ball dropped from 2.0 m rebounds to 1.3 m. Find e.', s: ['e = √(h<sub>2</sub>/h<sub>1</sub>) = √0.65.'], a: '0.81' },
    { q: 'A cyclist (C<sub>d</sub>A = 0.36 m²) rides at 12 m s<sup>−1</sup> in air of density 1.2 kg m<sup>−3</sup>. Find the drag force and the power needed to overcome it.', s: ['F = ½ × 1.2 × 0.36 × 12² = 31 N.', 'P = Fv = 31 × 12.'], a: '31 N; 370 W' }
  ],
  pitfalls: ['Assuming rotational KE is conserved when a skater changes shape.', 'Using diameter instead of radius in I = Σmr².', 'Getting the Magnus force direction wrong: it is towards the side where air moves faster relative to the ball.', 'Using e = h<sub>2</sub>/h<sub>1</sub> without the square root.'],
  cards: [
    ['Condition for a body not to topple?', 'Line of action of weight through the base.'],
    ['Define moment of inertia.', 'I = Σmr² — rotational equivalent of mass.'],
    ['Rotational form of N2L?', 'τ = Iα'],
    ['Rotational KE?', '½Iω²'],
    ['Angular momentum?', 'L = Iω'],
    ['Conservation of angular momentum?', 'Iω constant if no external torque.'],
    ['Why does a skater spin faster with arms in?', 'I decreases so ω increases (L constant).'],
    ['Define coefficient of restitution.', 'Relative speed of separation ÷ relative speed of approach.'],
    ['e from bounce heights?', '√(h<sub>2</sub>/h<sub>1</sub>)'],
    ['Drag equation?', 'F = ½ρC<sub>d</sub>Av²'],
    ['What is the Magnus effect?', 'Sideways force on a spinning ball due to pressure difference.'],
    ['Moment of inertia of a solid sphere? Thin spherical shell?', '(2/5)mr²; (2/3)mr²'],
    ['Define angular acceleration.', 'Rate of change of angular velocity: α = (ω₂ − ω₁)/t.'],
    ['Bernoulli’s equation (sport form)?', 'p = p₀ − ½ρv²']
  ],
  quiz: [
    { q: 'A diver tucks her body during a somersault. Her angular velocity', o: ['increases because her moment of inertia decreases', 'decreases because her moment of inertia decreases', 'stays the same', 'increases because her angular momentum increases'], x: 'L = Iω constant.' },
    { q: 'The unit of moment of inertia is', o: ['kg m<sup>2</sup>', 'kg m<sup>−2</sup>', 'N m', 'kg m s<sup>−1</sup>'], x: '' },
    { q: 'A ball is dropped from 1.6 m and bounces to 0.90 m. The coefficient of restitution is', o: ['0.75', '0.56', '0.90', '1.8'], x: '√(0.90/1.6).' },
    { q: 'When a skater pulls in her arms while spinning, her rotational kinetic energy', o: ['increases', 'decreases', 'stays the same', 'becomes zero'], x: 'E = L²/2I.' },
    { q: 'For a perfectly elastic collision, e equals', o: ['1', '0', '0.5', '∞'], x: '' },
    { q: 'If a cyclist’s speed doubles, the drag force', o: ['quadruples', 'doubles', 'is unchanged', 'increases eightfold'], x: 'F ∝ v². (Power ∝ v³.)' },
    { q: 'A body is more stable if', o: ['its centre of mass is lower and base wider', 'its centre of mass is higher', 'its base is narrower', 'it has less mass'], x: '' },
    { q: 'A torque of 12 N m acts on a wheel of I = 0.40 kg m². Its angular acceleration is', o: ['30 rad s<sup>−2</sup>', '4.8 rad s<sup>−2</sup>', '0.033 rad s<sup>−2</sup>', '12 rad s<sup>−2</sup>'], x: 'α = τ/I.' },
    { q: 'Following through when hitting a ball', o: ['increases contact time, increasing the ball’s change of momentum', 'reduces the force on the ball', 'reduces the ball’s final speed', 'reduces contact time'], x: 'Δp = FΔt.' },
    { q: 'A ball with back-spin experiences a Magnus force that is', o: ['upwards', 'downwards', 'zero', 'backwards along its path'], x: 'Faster airflow over the top → lower pressure above.' },
    { q: 'A solid ball of mass 0.45 kg and radius 0.11 m has a moment of inertia of about', o: ['2.2 × 10<sup>−3</sup> kg m²', '3.6 × 10<sup>−3</sup> kg m²', '5.4 × 10<sup>−3</sup> kg m²', '2.0 × 10<sup>−2</sup> kg m²'], x: '(2/5) × 0.45 × 0.11².' },
    { q: 'A wheel’s angular velocity rises from 4.0 to 10.0 rad s<sup>−1</sup> in 3.0 s. Its angular acceleration is', o: ['2.0 rad s<sup>−2</sup>', '4.7 rad s<sup>−2</sup>', '6.0 rad s<sup>−2</sup>', '18 rad s<sup>−2</sup>'], x: '(10 − 4)/3.' },
    { q: 'Air flows at 30 m s<sup>−1</sup> over a surface (ρ = 1.2 kg m<sup>−3</sup>). The reduction in pressure is', o: ['540 Pa', '18 Pa', '1080 Pa', '36 Pa'], x: '½ × 1.2 × 30².' }
  ],
  exam: [
    { q: 'Explain, using the principle of conservation of angular momentum, why a diver can control her rate of rotation, and explain where any change in kinetic energy comes from.', m: 5, ms: ['No external torque (gravity acts through CoM) → L = Iω constant.', 'Tucking reduces I (mass closer to axis) → ω increases.', 'Opening out increases I → ω decreases before entry.', 'KE = L²/2I increases when I decreases.', 'Extra energy from work done by muscles pulling limbs inwards.'] },
    { q: 'A tennis ball (58 g) arrives at 25 m s<sup>−1</sup> and leaves at 35 m s<sup>−1</sup> in the opposite direction after 4.0 ms contact. Calculate the mean force and explain the benefit of following through.', m: 4, ms: ['Δp = 0.058 × 60 = 3.48 kg m s<sup>−1</sup>', 'F = 3.48/0.004 = 870 N', 'Follow-through keeps racket in contact for longer', 'Greater Ft → greater change in momentum (Ft = mv − mu) → faster ball.'] },
    { q: 'A person holds a 50 N weight in the hand, 0.34 m from the elbow, with the forearm horizontal. The forearm weighs 16 N acting 0.15 m from the elbow, and the biceps is attached vertically 0.040 m from the elbow. Calculate the force in the biceps.', m: 3, ms: ['Moments about elbow: F × 0.040 = 50 × 0.34 + 16 × 0.15', 'F × 0.040 = 17 + 2.4 = 19.4 N m', 'F = 485 N'] }
  ],
  sims: [], gens: ['sport1', 'sport2', 'sport3', 'sport4', 'sport5']
});

TOPICS.push({
  id: 'D', unit: 'O', title: 'Energy and the Environment', short: 'Climate, renewables, nuclear, conduction',
  summary: 'Option D: the Earth’s energy balance and greenhouse effect, sea-level change, renewable and nuclear sources, fuel cells, and thermal conduction in buildings.',
  spec: [
    "(a)(i) Thermal equilibrium: balance between energy from the Sun and energy re-radiated by the Earth; global energy demand and CO₂ levels",
    "(a)(ii) Origin and transmission of solar energy; the Sun’s power spectrum; wavelengths converted into the near infrared in the atmosphere",
    "(a)(iii) Wien’s law and the Stefan–Boltzmann T⁴ law in the context of solar power",
    "(a)(iv) Density and Archimedes’ principle: melting land ice raises sea level, melting icebergs do not",
    "(b) Compare renewable and non-renewable sources in the UK and internationally",
    "(b)(i) Solar: the proton–proton chain; intensity I = P/A and the inverse square law; photovoltaic energy conversions and efficiency",
    "(b)(ii) Wind: power available ½ρAv³; factors affecting turbine efficiency",
    "(b)(iii) Tidal barrages, hydroelectric and pumped storage: Ep → Ek conversions; energy and power calculations; comparison with wind",
    "(b)(iv) Fission: breeding and enrichment. Fusion: the difficulties of sustained fusion power — the fusion triple product",
    "(c) Fuel cell operation and benefits for greenhouse gas emissions",
    "(d) The thermal conduction equation ΔQ/Δt = −AK Δθ/Δx",
    "(e) Effect of insulation; heat loss through parallel surfaces using rate = UAΔθ, including different materials in contact"
  ],
  learn: [
    { h: 'Earth’s energy balance and the greenhouse effect', html: `
<p>The <b>solar constant</b> is the intensity of the Sun’s radiation at the top of Earth’s atmosphere: about 1.36 kW m<sup>−2</sup>. The Earth intercepts it over a disc of area πR² but radiates from its whole surface, 4πR². About 30% is reflected (the <b>albedo</b>).</p>
<p>Balance: $(1 - "albedo") × S × πR^2 = 4πR^2σT^4$ gives T ≈ 255 K. The actual mean surface temperature is about 288 K. The difference is the <b>greenhouse effect</b>.</p>
[[d:greenhouse]]
<p><b>Origin of solar energy:</b> in the Sun’s core, hydrogen nuclei fuse to helium, mainly by the <b>proton–proton chain</b>: overall 4 ¹H → ⁴He + 2e<sup>+</sup> + 2ν<sub>e</sub> + energy (about 26.7 MeV). The energy reaches us as EM radiation through the vacuum of space. At distance d from the Sun, intensity $I = @frac{P}{A} = @frac{P}{4πd^2}$ (inverse square law).</p>
<p>The Sun (≈5800 K, λ<sub>max</sub> ≈ 500 nm by Wien) emits mostly visible and near-IR, which passes through the atmosphere; much of the absorbed short-wavelength energy is converted into <b>near infrared</b> within the atmosphere and at the surface. The Earth (≈288 K) radiates long-wavelength infrared (λ<sub>max</sub> ≈ 10 μm, by Wien’s law). Greenhouse gases (CO<sub>2</sub>, H<sub>2</sub>O, CH<sub>4</sub>) absorb this IR and re-emit it in all directions, including back towards the surface, raising the surface temperature. Increasing their concentration enhances the effect.</p>` },
    { h: 'Sea level', html: `
<ul><li><b>Thermal expansion</b>: warmer oceans expand (currently the larger contribution).</li>
<li><b>Melting land ice</b> (glaciers, Greenland and Antarctic ice sheets) adds water to the oceans.</li>
<li><b>Floating sea ice</b> already displaces its own weight of water (Archimedes’ principle: upthrust = weight of fluid displaced), so when it melts the level is (almost) unchanged.</li></ul>` },
    { h: 'Renewable sources', html: `
<div class="box def"><b class="lbl">Wind</b><p>Kinetic energy of air passing through the swept area A per second: mass per second = ρAv, so $P = @frac{1}{2}ρAv^3$. Doubling wind speed gives 8 × the power. Only a fraction can be extracted, since the air must keep moving. Efficiency depends on blade design and number, the wind speed (turbines cut out in very high winds), friction and generator losses, and turbulence from nearby turbines.</p></div>
<ul><li><b>Hydroelectric</b>: water’s E<sub>p</sub> is converted to E<sub>k</sub> and then electrical energy: P = (mass per second) × gh × efficiency.</li><li><b>Pumped storage</b> (e.g. Dinorwig in Wales): water is pumped uphill when demand is low and released through turbines when demand peaks, responding within seconds.</li>
<li><b>Tidal</b>: a barrage traps water at high tide; energy = ρgAh²/2 per emptying for a basin of area A and tidal range h. Predictable but limited sites.</li>
<li><b>Solar</b>: photovoltaic cells convert light directly to electricity. Efficiency = electrical power out ÷ (intensity × area) × 100%, typically 15–25%. Example: 1.5 m² of panels in 800 W m<sup>−2</sup> sunlight producing 216 W is 18% efficient.</li>
<li><b>Fuel cells</b>: hydrogen and oxygen combine to produce electricity, heat and water directly, with no combustion and no CO<sub>2</sub> at the point of use. The hydrogen must be produced (e.g. by electrolysis) using another energy source.</li></ul>
<p>Many renewables are <b>intermittent</b>, so storage (batteries, pumped storage, hydrogen) and a mix of sources are needed.</p>` },
    { h: 'Nuclear fission and fusion power', html: `
<p><b>Enrichment</b>: natural uranium is 99.3% U-238 and only 0.7% U-235, the isotope that undergoes fission with slow neutrons. Enrichment (e.g. in gas centrifuges, separating by the small mass difference) raises the U-235 fraction to about 3–5% for reactor fuel.</p>
<p><b>Breeding</b>: U-238 can absorb a neutron to form U-239, which β-decays twice to <b>plutonium-239</b> — itself fissile. A breeder reactor makes more fissile fuel than it uses, greatly extending uranium reserves (but Pu-239 raises security concerns).</p>
<p>Fission produces no CO<sub>2</sub> during generation, but long-lived radioactive waste must be stored safely for thousands of years.</p>
<p><b>Fusion</b> (e.g. D–T) is difficult to sustain because the nuclei must overcome their electrostatic repulsion. Three conditions must be met together, summarised by the <b>fusion triple product</b>: plasma density n × temperature T × energy confinement time τ must exceed about 3 × 10<sup>21</sup> keV s m<sup>−3</sup>. That needs temperatures above ~10<sup>8</sup> K (no material container can hold the plasma, so it is confined by magnetic fields in a tokamak such as JET or ITER), high density, and a long enough confinement time — all at once.</p>` },

    { h: 'Thermal conduction and buildings', html: `
<div class="box eq">$@frac{ΔQ}{Δt} = -KA@frac{Δθ}{Δx}$</div>
<p>K is the thermal conductivity (W m<sup>−1</sup> K<sup>−1</sup>); Δθ/Δx is the temperature gradient (the minus sign shows heat flows down the gradient). Metals have large K; still air and foams very small K.</p>
<p>Builders use <b>U-values</b>: rate of heat loss per unit area per unit temperature difference, ΔQ/Δt = UAΔθ (W m<sup>−2</sup> K<sup>−1</sup>). Double glazing, cavity-wall and loft insulation trap still air to reduce U.</p>
<h4>Materials in contact</h4><p>For layers in series (e.g. brick + insulation + plasterboard) the <b>same rate of heat flow</b> passes through every layer in the steady state. So for each layer $ΔQ/Δt = KAΔθ/Δx$ with the temperature drops adding up to the total. The layer with the lowest K/Δx has the largest temperature drop across it.</p><div class="box def"><b class="lbl">Example</b><p>A wall of area 10 m² is 0.10 m brick (K = 0.60) with 0.050 m foam (K = 0.030); inside 20 °C, outside 5 °C. Let the rate be P: brick drop = P × 0.10/(0.60 × 10), foam drop = P × 0.050/(0.030 × 10). Sum = P(0.0167 + 0.167) = 15 K, so P = 82 W.</p></div>` }
  ],
  eqs: [['I = @frac{P}{A} = @frac{P}{4πd^2}', 'solar intensity'], ['P = @frac{1}{2}ρAv^3', 'wind power'], ['P = @frac{m}{t}gh', 'hydro power'], ['@frac{ΔQ}{Δt} = -AK@frac{Δθ}{Δx}', 'conduction'], ['@frac{ΔQ}{Δt} = UAΔθ', 'U-value'], ['(1 - a)Sπ R^2 = 4πR^2σT^4', 'Earth energy balance']],
  worked: [
    { q: 'A wind turbine has blades of length 40 m. Find the power in the wind at 12 m s<sup>−1</sup> (ρ = 1.2 kg m<sup>−3</sup>) and the output at 40% efficiency.', s: ['A = π × 40² = 5030 m².', 'P = ½ × 1.2 × 5030 × 12³ = 5.2 × 10<sup>6</sup> W.', 'Output = 0.40 × 5.2 MW.'], a: '5.2 MW in the wind; 2.1 MW output' },
    { q: 'Estimate the Earth’s temperature without an atmosphere (S = 1360 W m<sup>−2</sup>, albedo 0.30).', s: ['Absorbed per m² of surface (average) = (1 − 0.30) × 1360/4 = 238 W m<sup>−2</sup>.', 'σT⁴ = 238, so T = (238/5.67 × 10<sup>−8</sup>)<sup>¼</sup>.'], a: '≈ 255 K (−18 °C)' },
    { q: 'A single-glazed window (K = 0.80 W m<sup>−1</sup> K<sup>−1</sup>, 4.0 mm thick, 2.0 m²) has 15 K across it. Find the rate of heat loss by conduction through the glass.', s: ['ΔQ/Δt = KAΔθ/Δx = 0.80 × 2.0 × 15/0.0040.'], a: '6.0 kW (in reality air layers either side reduce this a lot)' },
    { q: 'Water flows at 50 m³ s<sup>−1</sup> through turbines 120 m below the reservoir surface. Find the output at 85% efficiency.', s: ['Mass per second = 50 000 kg s<sup>−1</sup>.', 'P = 0.85 × 50 000 × 9.81 × 120.'], a: '50 MW' }
  ],
  pitfalls: ['Using the blade diameter as the radius for the swept area.', 'Forgetting v is cubed in the wind power equation.', 'Saying melting sea ice raises sea level significantly.', 'Thinking enrichment and breeding are the same: enrichment raises the U-235 fraction; breeding makes Pu-239 from U-238.', 'Dividing by 2 instead of 4 in the Earth energy balance.'],
  cards: [
    ['Solar constant?', '≈ 1.36 kW m<sup>−2</sup> at the top of the atmosphere.'],
    ['Why is Earth’s temperature higher than 255 K?', 'Greenhouse gases absorb and re-emit IR back towards the surface.'],
    ['Why does melting sea ice not raise sea level?', 'Floating ice already displaces its own weight of water (Archimedes).'],
    ['Wind power equation?', 'P = ½ρAv³'],
    ['Thermal conduction equation?', 'ΔQ/Δt = −KAΔθ/Δx'],
    ['What is a U-value?', 'Heat loss rate per m² per K of temperature difference.'],
    ['Fuel cell reaction products?', 'Electricity, heat and water.'],
    ['What is uranium enrichment?', 'Increasing the proportion of fissile U-235 (from 0.7% to ~3–5%).'],
    ['What is breeding?', 'Converting U-238 into fissile Pu-239 by neutron capture (then two β decays).'],
    ['What is the fusion triple product?', 'Density × temperature × confinement time; must exceed a threshold for net fusion power.'],
    ['Main energy source of the Sun?', 'The proton–proton chain: hydrogen fused to helium.']
  ],
  quiz: [
    { q: 'The wind speed doubles. The power available from a wind turbine', o: ['increases by a factor of 8', 'doubles', 'quadruples', 'is unchanged'], x: 'P ∝ v³.' },
    { q: 'Greenhouse gases warm the Earth because they', o: ['absorb infrared radiated by the Earth and re-emit some back', 'absorb most of the incoming visible light', 'reflect sunlight back into space', 'produce heat by chemical reactions'], x: '' },
    { q: 'The melting of floating sea ice', o: ['has almost no effect on sea level', 'raises sea level greatly', 'lowers sea level', 'causes thermal expansion'], x: '' },
    { q: 'The rate of heat conduction through a wall is doubled if', o: ['its thickness is halved', 'its thickness is doubled', 'its area is halved', 'its conductivity is halved'], x: 'ΔQ/Δt ∝ 1/Δx.' },
    { q: 'Fusion reactors need extremely high temperatures so that', o: ['nuclei can overcome electrostatic repulsion', 'neutrons can be slowed down', 'the fuel melts', 'electrons are captured'], x: '' },
    { q: 'The Earth radiates mainly in the', o: ['infrared', 'visible', 'ultraviolet', 'microwave'], x: 'Wien: ≈10 μm at 288 K.' },
    { q: 'A fuel cell', o: ['combines hydrogen and oxygen to produce electricity directly', 'burns hydrogen in a turbine', 'stores energy like a battery charged from the mains', 'uses nuclear fusion'], x: '' },
    { q: 'A disadvantage of wind and solar power is that they are', o: ['intermittent', 'high in CO<sub>2</sub> emissions when running', 'non-renewable', 'dependent on uranium supplies'], x: '' },
    { q: 'Breeding in a nuclear reactor means', o: ['converting U-238 into fissile Pu-239', 'increasing the proportion of U-235', 'slowing neutrons down', 'fusing hydrogen into helium'], x: '' },
    { q: 'The fusion triple product is the product of', o: ['plasma density, temperature and confinement time', 'mass, velocity and time', 'pressure, volume and temperature', 'power, area and efficiency'], x: '' },
    { q: 'Solar panels of area 2.0 m² receive 600 W m<sup>−2</sup> and deliver 200 W. Their efficiency is', o: ['17%', '33%', '8.3%', '60%'], x: '200 / (600 × 2.0).' },
    { q: 'In a wall made of two layers in contact, in the steady state', o: ['the rate of heat flow is the same through each layer', 'the temperature drop is the same across each layer', 'all the heat flows through the better conductor', 'no heat flows through the insulator'], x: '' }
  ],
  exam: [
    { q: 'Explain the greenhouse effect, referring to the wavelengths of radiation involved.', m: 4, ms: ['Sun is hot (~5800 K) so emits mainly short wavelengths (visible) — passes through atmosphere.', 'Earth’s surface absorbs and warms; emits long-wavelength IR (~10 μm, Wien).', 'Greenhouse gases (CO<sub>2</sub>, H<sub>2</sub>O, CH<sub>4</sub>) absorb IR.', 'Re-emit in all directions, some back to surface → surface warmer than without.'] },
    { q: 'Show that the power in the wind passing through area A at speed v is ½ρAv³.', m: 3, ms: ['Volume of air per second = Av.', 'Mass per second = ρAv.', 'KE per second = ½(ρAv)v² = ½ρAv³.'] },
    { q: 'Explain what is meant by enrichment and breeding in nuclear fission, and outline why sustained fusion power is difficult to achieve.', m: 5, ms: ['Enrichment: increasing the proportion of U-235 (fissile) from 0.7% to a few %.', 'Breeding: U-238 absorbs a neutron → U-239 → (β decays) → fissile Pu-239.', 'Fusion needs nuclei to overcome electrostatic repulsion: very high temperature (~10⁸ K).', 'Also needs high density and long confinement time: triple product nTτ must exceed a threshold.', 'Plasma cannot touch walls: magnetic confinement (tokamak) is difficult to sustain.'] }
  ],
  sims: [], gens: ['env1', 'env2', 'env3', 'env4', 'env5', 'env6']
});

/* ==========================================================
   SKILLS · Maths, data and practical techniques
   ========================================================== */
TOPICS.push({
  id: 'S1', unit: 'S', title: 'Measurement and Uncertainty', short: 'Errors, uncertainties, significant figures',
  summary: 'The practical skills tested in every paper and in the Unit 5 practical exam: uncertainties, combining them, significant figures and experimental design.',
  spec: [
    'Distinguish between random and systematic errors; accuracy, precision, resolution',
    'Estimate absolute uncertainties from resolution and from repeat readings (half the range)',
    'Calculate percentage uncertainties and combine them for sums, products, quotients and powers',
    'Give answers to an appropriate number of significant figures',
    'Identify control variables and suggest improvements to experiments'
  ],
  learn: [
    { h: 'Errors', html: `
<ul><li><b>Random errors</b> cause readings to scatter unpredictably about the true value (e.g. reaction time, fluctuating readings). Reduced by repeating and averaging, and by plotting graphs.</li>
<li><b>Systematic errors</b> shift all readings by the same amount or fraction (e.g. zero error, miscalibrated meter, parallax at a fixed angle). Not reduced by repeating; spotted when a graph that should pass through the origin does not.</li></ul>
<div class="box def"><b class="lbl">Vocabulary</b><p><b>Accurate</b>: close to the true value. <b>Precise</b>: readings close to each other (small spread). <b>Resolution</b>: the smallest change an instrument can detect. <b>Repeatable</b>: same result when the same experimenter repeats; <b>reproducible</b>: same result by a different person/method.</p></div>` },
    { h: 'Estimating uncertainties', html: `
<p>For repeated readings, the absolute uncertainty is usually taken as <b>half the range</b>: (max − min)/2, quoted with the mean. For a single reading, use the resolution of the instrument (or more, if the reading is hard to judge).</p>
<p>Percentage uncertainty = (absolute uncertainty ÷ value) × 100%.</p>
<div class="box def"><b class="lbl">Example</b><p>Times for 10 swings: 15.2, 15.6, 15.4 s. Mean = 15.4 s, uncertainty = (15.6 − 15.2)/2 = 0.2 s. So T = 1.54 ± 0.02 s (1.3%).</p></div>` },
    { h: 'Combining uncertainties', html: `
<div class="tbl"><table><tr><th>Operation</th><th>Rule</th></tr>
<tr><td>A + B or A − B</td><td>add <b>absolute</b> uncertainties</td></tr>
<tr><td>A × B or A ÷ B</td><td>add <b>percentage</b> uncertainties</td></tr>
<tr><td>A<sup>n</sup></td><td>multiply the percentage uncertainty by n</td></tr>
<tr><td>k × A (k exact)</td><td>same percentage uncertainty</td></tr></table></div>
<p>Example: a wire’s diameter is 0.50 ± 0.01 mm (2%). Area ∝ d², so the area has 4% uncertainty. If l has 0.5% and the extension 3%, the Young modulus E = Fl/AΔl has about 2 × 2 + 0.5 + 3 + (uncertainty in F) ≈ 7.5% + %F.</p>` },
    { h: 'Significant figures and reporting', html: `
<p>Give the final answer to the same number of significant figures as the least precise data (usually 2 or 3). Keep extra figures in intermediate steps to avoid rounding errors. The uncertainty is normally quoted to 1 (or 2) significant figures and the value rounded to the same decimal place.</p>
<p>Checking against a book value: if the accepted value lies within your uncertainty range, the result is consistent with it.</p>` }
  ],
  eqs: [['"% unc" = @frac{"absolute unc"}{"value"} × 100%', ''], ['"unc of mean" ≈ @frac{"range"}{2}', 'from repeats'], ['"%unc"(A^n) = n × "%unc"(A)', 'powers']],
  worked: [
    { q: 'A pendulum length is 0.800 ± 0.002 m and its period 1.80 ± 0.02 s. Find the percentage uncertainty in g = 4π²l/T².', s: ['%l = 0.002/0.800 = 0.25%.', '%T = 0.02/1.80 = 1.1%; T² contributes 2.2%.', 'Total = 0.25 + 2.2.'], a: '≈ 2.5%' },
    { q: 'A resistance is found from V = 6.0 ± 0.1 V and I = 0.50 ± 0.02 A. Find R with its uncertainty.', s: ['R = 12 Ω.', '%V = 1.7%, %I = 4.0%; total 5.7%.', 'Absolute = 0.057 × 12 = 0.7 Ω.'], a: '12.0 ± 0.7 Ω' }
  ],
  pitfalls: ['Adding absolute uncertainties when multiplying.', 'Forgetting to double the percentage for a squared quantity.', 'Quoting uncertainty to more significant figures than the value justifies.', 'Calling a result “accurate” when it is precise.'],
  cards: [
    ['Random vs systematic error?', 'Random: scatter, reduced by repeats. Systematic: consistent shift, not reduced by repeats.'],
    ['Define precision.', 'How close repeated measurements are to each other.'],
    ['Define accuracy.', 'How close a measurement is to the true value.'],
    ['Uncertainty from repeat readings?', 'Half the range.'],
    ['Combining uncertainties for a product?', 'Add percentage uncertainties.'],
    ['Combining uncertainties for a sum?', 'Add absolute uncertainties.'],
    ['% uncertainty in d³ if d has 1%?', '3%'],
    ['How does a zero error show on a graph?', 'Line does not pass through the origin (intercept).']
  ],
  quiz: [
    { q: 'Which type of error can be reduced by taking repeat readings and averaging?', o: ['random error', 'systematic error', 'zero error', 'calibration error'], x: '' },
    { q: 'A length is 25.0 ± 0.5 cm. Its percentage uncertainty is', o: ['2%', '0.5%', '5%', '0.02%'], x: '0.5/25.0.' },
    { q: 'A quantity is calculated as A × B, where A has 3% and B has 2% uncertainty. The result has', o: ['5%', '1%', '6%', '3%'], x: 'Add percentages.' },
    { q: 'The radius of a sphere has 2% uncertainty. The uncertainty in its volume is', o: ['6%', '2%', '8%', '4%'], x: 'V ∝ r³.' },
    { q: 'Readings of 2.34, 2.38 and 2.30 s give an uncertainty in the mean of about', o: ['0.04 s', '0.08 s', '0.02 s', '0.01 s'], x: 'Half the range: 0.08/2.' },
    { q: 'A set of readings that are close together but far from the true value are', o: ['precise but not accurate', 'accurate but not precise', 'accurate and precise', 'neither'], x: '' },
    { q: 'A systematic error might be caused by', o: ['a meter that reads 0.2 V with nothing connected', 'variation in reaction time', 'random fluctuations in a reading', 'too few repeats'], x: 'Zero error.' },
    { q: 'L<sub>1</sub> = 12.0 ± 0.1 cm and L<sub>2</sub> = 8.0 ± 0.1 cm. The uncertainty in L<sub>1</sub> − L<sub>2</sub> is', o: ['± 0.2 cm', '± 0.0 cm', '± 0.1 cm', '± 5%'], x: 'Add absolute uncertainties.' }
  ],
  exam: [
    { q: 'The diameter of a wire is measured as 0.36 mm, 0.38 mm and 0.37 mm. Calculate the mean, its absolute and percentage uncertainty, and the percentage uncertainty in the cross-sectional area.', m: 4, ms: ['Mean = 0.37 mm', 'Uncertainty = ±0.01 mm (half range)', '% = 2.7%', 'Area ∝ d² so 5.4%'] }
  ],
  sims: [], gens: ['unc1', 'unc2']
});

TOPICS.push({
  id: 'S2', unit: 'S', title: 'Graphs and Data Analysis', short: 'Linearising, gradients, logs',
  summary: 'Turning data into physics: straight-line graphs, gradients and intercepts, error bars, and logarithmic graphs for exponentials and power laws.',
  spec: [
    'Plot graphs with suitable scales, labelled axes with units, and a best-fit line',
    'Calculate gradients (large triangle) and intercepts and relate them to physical quantities',
    'Rearrange equations into the form y = mx + c to obtain a straight line',
    'Use error bars and lines of worst fit to estimate the uncertainty in a gradient',
    'Use ln graphs for exponential relationships and log–log graphs for power laws'
  ],
  learn: [
    { h: 'Straight-line graphs', html: `
<p>Compare the equation with <b>y = mx + c</b>. Whatever multiplies the x-variable is the gradient; any constant term is the intercept.</p>
<div class="tbl"><table><tr><th>Equation</th><th>Plot y</th><th>Plot x</th><th>Gradient</th><th>Intercept</th></tr>
<tr><td>$T = 2π@sqrt{l/g}$</td><td>T²</td><td>l</td><td>4π²/g</td><td>0</td></tr>
<tr><td>$V = E - Ir$</td><td>V</td><td>I</td><td>−r</td><td>E</td></tr>
<tr><td>$E_{k max} = hf - φ$</td><td>E<sub>k max</sub></td><td>f</td><td>h</td><td>−φ</td></tr>
<tr><td>$R = ρl/A$</td><td>R</td><td>l</td><td>ρ/A</td><td>0</td></tr>
<tr><td>$A = A_0e^{-λt}$</td><td>ln A</td><td>t</td><td>−λ</td><td>ln A<sub>0</sub></td></tr>
<tr><td>$y = kx^n$</td><td>ln y</td><td>ln x</td><td>n</td><td>ln k</td></tr></table></div>` },
    { h: 'Good graph practice', html: `
<ul><li>Label axes with quantity and unit, e.g. <i>T</i><sup>2</sup> / s<sup>2</sup>. Use scales that make the points fill at least half the grid, avoiding awkward multiples (3, 7…).</li>
<li>Plot points accurately (small crosses) and draw a single smooth best-fit line with points balanced either side.</li>
<li>Find the gradient using a <b>large</b> triangle (at least half the line), reading points <b>on the line</b> (not data points).</li>
<li>Error bars show each point’s uncertainty. The steepest and shallowest lines passing through all error bars give the gradient uncertainty: ½(max − min).</li></ul>` },
    { h: 'Logarithms', html: `
<p>For exponential decay (radioactivity, capacitor discharge, X-ray attenuation), take natural logs: $"ln"@,y = "ln"@,y_0 - kt$ is a straight line of gradient −k.</p>
<p>For power laws y = kx<sup>n</sup>: $"ln"@,y = n@,"ln"@,x + "ln"@,k$, so a log–log graph has gradient n — the power. This is how Kepler’s third law (n = 3/2 for T against r) can be tested.</p>
<p>ln values have no units; label axes as ln(A / Bq), etc.</p>` }
  ],
  eqs: [['y = mx + c', 'straight line'], ['"ln"@,y = "ln"@,y_0 - kt', 'exponential'], ['"ln"@,y = n@,"ln"@,x + "ln"@,k', 'power law']],
  worked: [
    { q: 'A graph of ln(A/Bq) against t/min has gradient −0.0866 min<sup>−1</sup>. Find the half-life.', s: ['λ = 0.0866 min<sup>−1</sup>.', 'T<sub>½</sub> = ln 2/λ = 0.693/0.0866.'], a: '8.0 min' },
    { q: 'For a mass–spring system, a graph of T² (s²) against m (kg) has gradient 0.987 s² kg<sup>−1</sup>. Find k.', s: ['T² = (4π²/k)m, so gradient = 4π²/k.', 'k = 4π²/0.987.'], a: '40 N m<sup>−1</sup>' }
  ],
  pitfalls: ['Using data points (not points on the line) for the gradient.', 'Small gradient triangles.', 'Forgetting unit prefixes on axes (e.g. mA, ms).', 'Plotting T instead of T² and expecting a straight line.'],
  cards: [
    ['Graph to find g from a pendulum?', 'T² against l; gradient 4π²/g.'],
    ['Graph for exponential decay?', 'ln y against t; gradient −λ (or −1/RC).'],
    ['Graph for a power law y = kx<sup>n</sup>?', 'ln y against ln x; gradient n.'],
    ['How to find gradient uncertainty?', 'Steepest and shallowest lines through error bars; ½(difference).'],
    ['Graph for photoelectric h?', 'E<sub>k max</sub> (or V<sub>s</sub>) against f.']
  ],
  quiz: [
    { q: 'To obtain a straight line from T = 2π√(l/g), plot', o: ['T² against l', 'T against l', 'T against l²', '√T against l'], x: '' },
    { q: 'A graph of ln y against ln x has gradient 1.5. The relationship is', o: ['y ∝ x<sup>1.5</sup>', 'y ∝ e<sup>1.5x</sup>', 'y ∝ 1.5x', 'y ∝ x<sup>−1.5</sup>'], x: '' },
    { q: 'For V = E − Ir, a graph of V against I has y-intercept', o: ['E', 'r', '−r', 'zero'], x: '' },
    { q: 'For a capacitor discharge, a graph of ln V against t has gradient', o: ['−1/RC', '−RC', 'V<sub>0</sub>', '1/RC'], x: '' },
    { q: 'The best way to determine a gradient is to use', o: ['a large triangle with points read from the line', 'the first and last data points', 'a small triangle near the origin', 'the average of y ÷ x for each point'], x: '' }
  ],
  exam: [
    { q: 'The activity A of a source is measured at intervals. Explain how a graph can be used to determine the decay constant, and why this is better than using just two readings.', m: 4, ms: ['A = A<sub>0</sub>e<sup>−λt</sup> → ln A = ln A<sub>0</sub> − λt.', 'Plot ln A against t; straight line.', 'Gradient = −λ.', 'Graph uses all data / averages random error / shows anomalies.'] }
  ],
  sims: [], gens: ['graph1']
});
