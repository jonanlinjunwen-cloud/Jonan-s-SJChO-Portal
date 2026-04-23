export const syllabusTopics = [
  {
    id: "stoichiometry",
    title: "Stoichiometry & Redox Reactions",
    icon: "⚖️",
    category: "Physical Chemistry",
    description: "The foundation of quantitative chemistry — mastering mole calculations, balanced equations, and electron transfer processes.",
    keyConcepts: [
      {
        title: "The Mole Concept",
        content: `The mole is the SI unit for amount of substance. One mole contains exactly 6.022 × 10²³ particles (Avogadro's number).

**Key relationships:**
• Moles = Mass ÷ Molar Mass (n = m/M)
• Moles = Volume of gas (at STP) ÷ 22.4 dm³
• Moles = Concentration × Volume (n = C × V)
• At STP: 1 mole of any gas occupies 22.4 dm³ (or 24 dm³ at RTP)

**Empirical & Molecular Formulae:**
• Empirical formula = simplest whole number ratio of atoms
• Molecular formula = actual number of atoms in a molecule
• Molecular formula = (Empirical formula)ₙ where n = Mᵣ(empirical) ÷ Mᵣ(given)`
      },
      {
        title: "Balancing Chemical Equations",
        content: `Chemical equations must obey the law of conservation of mass — the number of atoms of each element must be equal on both sides.

**Steps:**
1. Write the unbalanced equation with correct formulae
2. Balance atoms that appear in only one compound on each side first
3. Balance H and O atoms last
4. Check that all atoms balance and charges balance (for ionic equations)

**Ionic Equations:**
• Write full balanced equation
• Split all soluble ionic compounds into ions
• Cancel spectator ions
• Example: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq) simplifies to Ag⁺(aq) + Cl⁻(aq) → AgCl(s)`
      },
      {
        title: "Redox Reactions",
        content: `Redox = Reduction + Oxidation occurring simultaneously.

**Definitions:**
• Oxidation: loss of electrons (OIL — Oxidation Is Loss)
• Reduction: gain of electrons (RIG — Reduction Is Gain)
• Oxidising agent: species that causes oxidation (gets reduced itself)
• Reducing agent: species that causes reduction (gets oxidised itself)

**Oxidation States — Rules:**
1. Free elements = 0 (e.g., O₂, Fe, Cl₂)
2. Monatomic ions = ionic charge (Na⁺ = +1, Cl⁻ = −1)
3. H is usually +1 (except metal hydrides where it's −1)
4. O is usually −2 (except peroxides −1, OF₂ where +2)
5. Sum of oxidation states = overall charge

**Balancing Redox (Half-equation method):**
1. Assign oxidation states
2. Write separate half-equations for oxidation and reduction
3. Balance atoms (add H₂O for O, H⁺ for H in acidic solution)
4. Balance charges with electrons
5. Multiply half-equations to equalise electrons
6. Add half-equations and simplify`
      },
      {
        title: "Reacting Masses & Solution Concentrations",
        content: `**Limiting Reagents:**
• The reactant that is completely consumed first determines the maximum amount of product
• Compare mole ratios to identify the limiting reagent
• Calculate theoretical yield from the limiting reagent

**Percentage Yield:**
• % Yield = (Actual yield ÷ Theoretical yield) × 100%

**Solution Concentrations:**
• Concentration (mol/dm³) = moles ÷ volume (dm³)
• Concentration (g/dm³) = mass (g) ÷ volume (dm³)
• To convert: C(mol/dm³) = C(g/dm³) ÷ Mᵣ

**Titration Calculations:**
• Use stoichiometric ratios from balanced equations
• Identify the unknown (concentration, volume, or mass)
• Apply n = CV systematically

**Gas Calculations:**
• PV = nRT (Ideal Gas Equation)
• At STP (0°C, 1 atm): use 22.4 dm³/mol
• At RTP (25°C, 1 atm): use 24 dm³/mol`
      }
    ]
  },
  {
    id: "atomic-structure",
    title: "Atomic Structure",
    icon: "⚛️",
    category: "Physical Chemistry",
    description: "Understanding the structure of atoms, electronic configurations, and quantum mechanical principles.",
    keyConcepts: [
      {
        title: "Subatomic Particles",
        content: `**Proton:** charge +1e, mass ≈ 1 u, located in nucleus
**Neutron:** charge 0, mass ≈ 1 u, located in nucleus  
**Electron:** charge −1e, mass ≈ 1/1840 u, orbits nucleus

**Key Definitions:**
• Atomic (proton) number (Z) = number of protons in nucleus
• Mass (nucleon) number (A) = number of protons + neutrons
• Isotopes = atoms of the same element with different numbers of neutrons
• Isotopes have the same electronic configuration and chemical properties

**Relative Masses:**
• Relative atomic mass = weighted average of isotopic masses (accounting for abundance)`
      },
      {
        title: "Electronic Configuration",
        content: `**Aufbau Principle:** Electrons fill orbitals from lowest energy to highest.
Order: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d

**Pauli Exclusion Principle:** Each orbital holds max 2 electrons with opposite spins.
**Hund's Rule:** Electrons fill degenerate orbitals singly before pairing.

**Writing Configurations:**
• Sodium (Z=11): 1s² 2s² 2p⁶ 3s¹ or [Ne] 3s¹
• Iron (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² or [Ar] 3d⁶ 4s²

**Exceptions (for SJChO):**
• Cr: [Ar] 3d⁵ 4s¹ (not 3d⁴ 4s²) — half-filled d subshell stability
• Cu: [Ar] 3d¹⁰ 4s¹ (not 3d⁹ 4s²) — fully filled d subshell stability

**Note:** When forming ions, 4s electrons are removed BEFORE 3d electrons.`
      },
      {
        title: "Quantum Numbers (A-Level Extension)",
        content: `Each electron is described by 4 quantum numbers:

1. **Principal quantum number (n):** energy level, n = 1, 2, 3, ...
2. **Angular momentum quantum number (l):** subshell type
   • l = 0 → s orbital; l = 1 → p; l = 2 → d; l = 3 → f
3. **Magnetic quantum number (mₗ):** orbital orientation
   • Range: −l to +l (e.g., for p: −1, 0, +1 → three p orbitals)
4. **Spin quantum number (mₛ):** electron spin = +½ or −½

**Orbital Shapes:**
• s orbitals: spherical
• p orbitals: dumbbell-shaped (three orientations: pₓ, pᵧ, p₂)
• d orbitals: clover-shaped (five orientations)

**Electrostatic Effects:**
• Effective nuclear charge (Zeff) = actual nuclear charge − shielding
• Across a period: Zeff increases → smaller atomic radius
• Down a group: additional shells → larger atomic radius`
      }
    ]
  },
  {
    id: "bonding",
    title: "Chemical Bonding",
    icon: "🔗",
    category: "Physical Chemistry",
    description: "How atoms combine through ionic, covalent, and metallic bonds, and the resulting structures and properties.",
    keyConcepts: [
      {
        title: "Ionic Bonding",
        content: `Formed by the electrostatic attraction between cations (positive ions) and anions (negative ions).

**Formation:** Metal atoms transfer electrons to non-metal atoms.
• Metal atoms → lose electrons → form cations
• Non-metal atoms → gain electrons → form anions

**Properties of Ionic Compounds:**
• High melting/boiling points (strong electrostatic forces)
• Conduct electricity when molten or in aqueous solution (mobile ions)
• Brittle — displacement of ions causes repulsion
• Generally soluble in water

**Lattice Energy:**
• Energy released when gaseous ions form 1 mole of solid ionic lattice
• Greater charge and smaller ions → stronger lattice energy
• Born-Haber cycle relates lattice energy to other enthalpy changes
• Lattice energy ∝ (q₊ × q₋) / (r₊ + r₋)

**Giant Ionic Lattice Structure:**
• NaCl structure: each Na⁺ surrounded by 6 Cl⁻ (octahedral coordination)
• CsCl structure: each Cs⁺ surrounded by 8 Cl⁻ (cubic coordination)`
      },
      {
        title: "Covalent Bonding",
        content: `Formed by the sharing of electrons between atoms to achieve stable electronic configurations.

**Types:**
• Sigma (σ) bond: head-on overlap of orbitals (single bond component)
• Pi (π) bond: side-on overlap of p orbitals (in double/triple bonds)

**Bond Polarity:**
• Polar covalent bond: unequal electron sharing (ΔEN > 0.4)
• Non-polar covalent bond: equal sharing (ΔEN < 0.4)
• Electronegativity increases across a period, decreases down a group

**Dative (Coordinate) Covalent Bond:**
• Both shared electrons come from one atom
• Examples: NH₄⁺ (N→H⁺), CO (C←O), NH₃→BF₃

**Giant Covalent Structures (Macromolecular):**
• Diamond: each C bonded to 4 others in tetrahedral arrangement — extremely hard, high mp
• Graphite: each C bonded to 3 others in layers — conducts electricity, lubricant
• SiO₂: similar to diamond — high mp, hard`
      },
      {
        title: "Metallic Bonding",
        content: `The electrostatic attraction between positive metal ions and a 'sea' of delocalised electrons.

**Strength depends on:**
• Charge of metal ions (higher charge → stronger)
• Size of metal ions (smaller → stronger)
• Number of delocalised electrons per atom

**Properties of Metals:**
• Good electrical conductors (delocalised electrons carry charge)
• Good thermal conductors
• Malleable and ductile (layers of ions can slide)
• High melting points (generally)
• Shiny/lustrous appearance

**Alloys:**
• Mixtures of metals (or metals with non-metals)
• Different-sized atoms disrupt regular arrangement → harder than pure metals
• Examples: steel (Fe + C), brass (Cu + Zn), bronze (Cu + Sn)`
      },
      {
        title: "VSEPR Theory & Molecular Geometry",
        content: `Valence Shell Electron Pair Repulsion — electron pairs around a central atom arrange to minimise repulsion.

**Repulsion order:** lone pair–lone pair > lone pair–bond pair > bond pair–bond pair

**Common Geometries (AXE notation):**
| Arrangement | Bonding Pairs | Lone Pairs | Shape | Bond Angle |
|---|---|---|---|---|
| AX₂ | 2 | 0 | Linear | 180° |
| AX₃ | 3 | 0 | Trigonal planar | 120° |
| AX₂E | 2 | 1 | Bent/V-shaped | ~117° |
| AX₄ | 4 | 0 | Tetrahedral | 109.5° |
| AX₃E | 3 | 1 | Trigonal pyramidal | ~107° |
| AX₂E₂ | 2 | 2 | Bent/V-shaped | ~104.5° |
| AX₅ | 5 | 0 | Trigonal bipyramidal | 90°/120° |
| AX₆ | 6 | 0 | Octahedral | 90° |

**Note:** Lone pairs compress bond angles slightly below the ideal.`
      },
      {
        title: "Intermolecular Forces",
        content: `Forces BETWEEN molecules (weaker than intramolecular bonds):

**1. van der Waals (London dispersion) forces:**
• Present in ALL molecules
• Caused by temporary instantaneous dipoles
• Strength increases with: molecular size, number of electrons, surface area contact
• Example: noble gases, halogens (F₂ < Cl₂ < Br₂ < I₂ bp trend)

**2. Permanent dipole–dipole interactions:**
• Between polar molecules
• Stronger than dispersion forces alone
• Example: HCl, CH₃Cl

**3. Hydrogen bonding:**
• Special case: H bonded to F, O, or N
• MUCH stronger than other IMF
• Example: H₂O, NH₃, HF, alcohols, carboxylic acids
• Explains anomalously high bp of water

**Effect on Properties:**
• Boiling/melting points: stronger IMF → higher bp/mp
• Solubility: "like dissolves like" (polar dissolves polar)`
      }
    ]
  },
  {
    id: "kinetics",
    title: "Chemical Kinetics",
    icon: "⚡",
    category: "Physical Chemistry",
    description: "The study of reaction rates, factors affecting speed of reaction, and the mechanisms by which reactions occur.",
    keyConcepts: [
      {
        title: "Reaction Rate",
        content: `Rate = change in concentration / change in time
Units: mol dm⁻³ s⁻¹

**Measuring Rate:**
• Monitor concentration of reactant/product over time
• Techniques: gas collection, colorimetry, mass loss, pH measurement, titration

**Factors Affecting Rate:**
1. **Concentration/Pressure** — more particles per unit volume → more frequent collisions
2. **Temperature** — increases kinetic energy → more particles with E ≥ Ea
3. **Surface Area** — more exposed surface → more collision sites
4. **Catalyst** — lowers activation energy by providing alternative pathway
5. **Light** — provides energy for photochemical reactions`
      },
      {
        title: "Collision Theory",
        content: `For a reaction to occur, particles must:
1. **Collide** with sufficient energy (≥ activation energy, Ea)
2. **Collide** with the correct orientation

**Effective collision** = one that leads to a reaction.

**Maxwell-Boltzmann Distribution:**
• Shows distribution of molecular energies at a given temperature
• Area under curve = total number of molecules
• Only molecules with E ≥ Ea can react
• At higher temperature: curve flattens, peak shifts right, more molecules have E ≥ Ea

**Activation Energy (Ea):**
• Minimum energy required for a reaction to occur
• Represents an energy barrier that must be overcome
• On reaction profile: the peak between reactants and products`
      },
      {
        title: "Rate Laws & Orders of Reaction",
        content: `**Rate Equation:** Rate = k[A]^m[B]^n

Where:
• k = rate constant
• m = order with respect to A
• n = order with respect to B  
• Overall order = m + n

**Determining Orders:**
| Order | Effect of doubling [reactant] | Rate equation |
|---|---|---|
| Zero | No change in rate | Rate = k |
| First | Rate doubles | Rate = k[A] |
| Second | Rate quadruples | Rate = k[A]² |

**Methods to Determine Orders:**
1. **Initial rates method:** compare initial rates for different initial concentrations
2. **Concentration-time graphs:** 
   • Zero order: straight line (rate independent of [A])
   • First order: exponential decay (constant half-life)
   • Second order: steeper initial decay (half-life increases)
3. **Half-life method (first order only):** t½ = ln2 / k

**Integrated Rate Laws (A-Level):**
• Zero order: [A] = [A]₀ − kt
• First order: ln[A] = ln[A]₀ − kt
• Second order: 1/[A] = 1/[A]₀ + kt`
      },
      {
        title: "Activation Energy & the Arrhenius Equation",
        content: `**Arrhenius Equation:** k = Ae^(−Ea/RT)

Where:
• k = rate constant
• A = pre-exponential factor (frequency factor)
• Ea = activation energy (J mol⁻¹)
• R = gas constant = 8.314 J mol⁻¹ K⁻¹
• T = temperature in Kelvin

**Logarithmic form:** ln k = ln A − Ea/(RT)

**Graphical determination:**
Plot ln k vs 1/T → straight line with gradient = −Ea/R and y-intercept = ln A

**Catalysis:**
• Catalyst provides an alternative pathway with lower Ea
• Does not affect position of equilibrium
• Does not affect ΔH of reaction
• Homogeneous catalyst: same phase as reactants
• Heterogeneous catalyst: different phase (e.g., solid catalyst for gas reaction)
• Enzymes: biological catalysts, highly specific, optimum temperature/pH`
      }
    ]
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics",
    icon: "🔥",
    category: "Physical Chemistry",
    description: "Energy changes in chemical reactions — enthalpy, entropy, and the feasibility of reactions.",
    keyConcepts: [
      {
        title: "Enthalpy Changes (ΔH)",
        content: `Enthalpy (H) = heat content of a system at constant pressure.

**Definitions:**
• ΔH = H(products) − H(reactants)
• Exothermic: ΔH < 0 (heat released to surroundings)
• Endothermic: ΔH > 0 (heat absorbed from surroundings)

**Standard Enthalpy Changes:**
• ΔH°f = standard enthalpy change of formation (from elements in standard states)
• ΔH°c = standard enthalpy change of combustion
• ΔH°neut = standard enthalpy change of neutralisation
• ΔH°a = enthalpy change of atomisation

**Bond Dissociation Energy:**
• Energy required to break 1 mole of a covalent bond in gaseous state
• ΔH = Σ(bonds broken) − Σ(bonds formed)
• Bond breaking = endothermic (+), Bond forming = exothermic (−)`
      },
      {
        title: "Hess's Law",
        content: `The total enthalpy change for a reaction is independent of the route taken.

**Application 1 — Using Formation Data:**
ΔH = Σ ΔH°f(products) − Σ ΔH°f(reactants)

**Application 2 — Using Combustion Data:**
ΔH = Σ ΔH°c(reactants) − Σ ΔH°c(products)

**Application 3 — Energy Cycles:**
• Draw an energy level diagram
• Calculate unknown enthalpy by following alternative route
• Use algebraic sum of known enthalpy changes

**Born-Haber Cycle (Ionic Compounds):**
Relates lattice energy to other enthalpy changes:
ΔH°f = ΔH°a(metal) + IE + ΔH°a(non-metal) + EA + Lattice Energy

Where IE = ionisation energy, EA = electron affinity`
      },
      {
        title: "Entropy (ΔS)",
        content: `Entropy (S) = measure of disorder/randomness of a system.

**Units:** J K⁻¹ mol⁻¹

**Factors affecting entropy:**
• State: gases > liquids > solids (generally S_gas >> S_liquid > S_solid)
• More particles → higher entropy
• Dissolving a solid → increase in entropy
• Heating → increase in entropy

**Entropy Change:** ΔS = Σ S(products) − Σ S(reactants)

**ΔS > 0 (positive):** disorder increases (favourable)
• Melting, boiling, dissolving, gas produced in reaction
**ΔS < 0 (negative):** disorder decreases (unfavourable)
• Freezing, condensing, gas reacting to form solid/liquid`
      },
      {
        title: "Gibbs Free Energy (ΔG)",
        content: `Determines whether a reaction is thermodynamically feasible (spontaneous).

**Equation:** ΔG = ΔH − TΔS

**Criteria:**
• ΔG < 0: reaction is feasible (spontaneous)
• ΔG > 0: reaction is NOT feasible (non-spontaneous)
• ΔG = 0: system is at equilibrium

**Temperature Dependence:**
At equilibrium: T = ΔH / ΔS (when ΔG = 0)

| ΔH | ΔS | Result |
|---|---|---|
| Negative | Positive | Always feasible (ΔG always < 0) |
| Positive | Negative | Never feasible (ΔG always > 0) |
| Negative | Negative | Feasible at low T |
| Positive | Positive | Feasible at high T |

**Note:** Thermodynamic feasibility (ΔG < 0) does NOT guarantee the reaction will occur at a measurable rate — kinetics still matters!`
      }
    ]
  },
  {
    id: "equilibria",
    title: "Chemical Equilibria",
    icon: "🔄",
    category: "Physical Chemistry",
    description: "Dynamic equilibrium, Le Chatelier's Principle, equilibrium constants, and their applications.",
    keyConcepts: [
      {
        title: "Dynamic Equilibrium",
        content: `A reversible reaction reaches dynamic equilibrium when:
• The rate of the forward reaction equals the rate of the reverse reaction
• The concentrations of reactants and products remain constant
• It can only be achieved in a closed system

**Key Points:**
• Equilibrium does NOT mean equal concentrations
• It is a dynamic state — reactions continue in both directions
• Position of equilibrium can be shifted by changing conditions`
      },
      {
        title: "Le Chatelier's Principle",
        content: `"When a system at equilibrium is subjected to a change, the system shifts to counteract that change."

**Effect of Concentration:**
• Increase [reactant] → shifts RIGHT (towards products)
• Increase [product] → shifts LEFT (towards reactants)

**Effect of Pressure (gaseous systems):**
• Increase pressure → shifts towards side with FEWER gas molecules
• Decrease pressure → shifts towards side with MORE gas molecules

**Effect of Temperature:**
• Increase T → shifts in ENDOTHERMIC direction
• Decrease T → shifts in EXOTHERMIC direction

**Catalyst:**
• Does NOT affect position of equilibrium
• Speeds up attainment of equilibrium (equal effect on both forward and reverse rates)

**Industrial Applications:**
• Haber Process (N₂ + 3H₂ ⇌ 2NH₃): compromise conditions
• Contact Process (2SO₂ + O₂ ⇌ 2SO₃): excess O₂, moderate T`
      },
      {
        title: "Equilibrium Constants",
        content: `**Kc (concentration equilibrium constant):**
For aA + bB ⇌ cC + dD:
Kc = [C]^c [D]^d / [A]^a [B]^b

**Kp (pressure equilibrium constant — gaseous systems):**
Kp = (pC)^c (pD)^d / (pA)^a (pB)^b

Where p = partial pressure = mole fraction × total pressure

**Important Rules:**
• Pure solids and liquids are OMITTED from Kc/Kp expressions
• K is temperature-dependent only
• Large K → equilibrium favours products (lies to the right)
• Small K → equilibrium favours reactants (lies to the left)

**Reaction Quotient (Q):**
• Q has the same expression as K but uses current (non-equilibrium) values
• Q < K → reaction proceeds forward (right)
• Q > K → reaction proceeds backward (left)
• Q = K → system is at equilibrium

**ICE Tables:**
I = Initial concentrations
C = Change (in terms of x)
E = Equilibrium concentrations
Substitute E values into K expression and solve for x.`
      }
    ]
  },
  {
    id: "acids-bases",
    title: "Acids & Bases",
    icon: "🧪",
    category: "Physical Chemistry",
    description: "Theories of acids and bases, pH calculations, buffers, and titration curves.",
    keyConcepts: [
      {
        title: "Theories of Acids & Bases",
        content: `**Arrhenius Theory:**
• Acid: produces H⁺ ions in water
• Base: produces OH⁻ ions in water
• Limitation: only applies to aqueous solutions

**Brønsted-Lowry Theory:**
• Acid: proton (H⁺) donor
• Base: proton (H⁺) acceptor
• Conjugate acid-base pair: differ by one proton
• Example: HA + B → A⁻ + BH⁺ (HA/BH⁺ are acids; B/A⁻ are bases)

**Lewis Theory (A-Level extension):**
• Acid: electron pair ACCEPTOR (electrophile)
• Base: electron pair DONOR (nucleophile)
• Broader — includes reactions without proton transfer
• Example: BF₃ + NH₃ → F₃B←NH₃

**Strong vs Weak:**
• Strong acid/base: completely dissociated in water (HCl, NaOH)
• Weak acid/base: partially dissociated (CH₃COOH, NH₃)
• Strength ≠ Concentration!`
      },
      {
        title: "pH Calculations",
        content: `**pH = −log₁₀[H⁺]**    **[H⁺] = 10^(−pH)**

**Strong acids (complete dissociation):**
• [H⁺] = concentration of acid (for monoprotic acids)
• For H₂SO₄ (diprotic): [H⁺] ≈ 2 × [H₂SO₄] (first dissociation strong)

**Strong bases:**
• pOH = −log₁₀[OH⁻]
• pH + pOH = 14 (at 25°C, Kw = 10⁻¹⁴)
• [H⁺] = Kw / [OH⁻]

**Weak acids — Ka (acid dissociation constant):**
HA ⇌ H⁺ + A⁻
Ka = [H⁺][A⁻] / [HA]

**Approximation for weak acids:**
[H⁺] = √(Ka × [HA]) → pH = ½(pKa − log[HA])

**pKa = −log₁₀(Ka)** → lower pKa = stronger acid

**Kw (ionic product of water):**
Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ mol² dm⁻⁶ (at 25°C)
Kw increases with temperature (dissociation of water is endothermic)`
      },
      {
        title: "Buffers & Titration",
        content: `**Buffer Solution:** resists changes in pH when small amounts of acid/base are added.

**Acidic Buffer:** weak acid + its conjugate base (salt)
• Example: CH₃COOH + CH₃COONa
• Henderson-Hasselbalch: pH = pKa + log([salt]/[acid])

**Basic Buffer:** weak base + its conjugate acid (salt)
• Example: NH₃ + NH₄Cl

**Titration Curves:**
| Type | pH at Equivalence | Example |
|---|---|---|
| Strong acid + Strong base | 7 | HCl + NaOH |
| Weak acid + Strong base | > 7 (basic) | CH₃COOH + NaOH |
| Strong acid + Weak base | < 7 (acidic) | HCl + NH₃ |
| Weak acid + Weak base | ~7 (varies) | CH₃COOH + NH₃ |

**Indicators:**
• Choose indicator whose colour change range includes the equivalence point pH
• Phenolphthalein: colourless pH < 8.2, pink pH > 10
• Methyl orange: red pH < 3.1, yellow pH > 4.4`
      }
    ]
  },
  {
    id: "electrochemistry",
    title: "Electrochemistry",
    icon: "🔋",
    category: "Physical Chemistry",
    description: "Electrochemical cells, electrode potentials, electrolysis, and applications in industry.",
    keyConcepts: [
      {
        title: "Electrochemical Cells",
        content: `Convert chemical energy to electrical energy (galvanic/voltaic) or vice versa (electrolytic).

**Galvanic (Voltaic) Cell:**
• Spontaneous redox reaction generates electricity
• Anode: oxidation (negative electrode)
• Cathode: reduction (positive electrode)
• Electron flow: anode → external circuit → cathode
• Example: Zn|Zn²⁺ || Cu²⁺|Cu (Daniell cell)

**Standard Electrode Potential (E°):**
• Voltage of a half-cell relative to standard hydrogen electrode (SHE, E° = 0.00 V)
• More positive E° = stronger oxidising agent (easily reduced)
• More negative E° = stronger reducing agent (easily oxidised)

**Calculating Cell EMF:**
E°cell = E°(cathode/reduction) − E°(anode/oxidation)
or E°cell = E°(positive electrode) − E°(negative electrode)

**Feasibility:** If E°cell > 0, the reaction is thermodynamically feasible.`
      },
      {
        title: "Electrolysis",
        content: `Using electrical energy to drive non-spontaneous reactions.

**Key Terms:**
• Anode: positive electrode (oxidation occurs)
• Cathode: negative electrode (reduction occurs)
• Remember: "LEO says GER" or "AN OX, RED CAT"

**Discharge of Ions — Preferential Discharge:**
At cathode: species with least negative E° discharged (most easily reduced)
• In aqueous solution: if metal is above H in reactivity series, H₂ is produced
• Exceptions: Cu²⁺, Ag⁺, Au³⁺ are discharged preferentially over H⁺

At anode: species with least positive E° discharged (most easily oxidised)
• If halide ions present: Cl₂, Br₂, I₂ produced
• If no halide: O₂ produced from OH⁻
• Inert electrodes: Pt, graphite

**Faraday's Laws:**
1st Law: mass ∝ charge passed
2nd Law: 1 mole of electrons (1 Faraday = 96500 C) discharges 1 mole of singly-charged ions

**Calculations:** moles of electrons = charge (C) / 96500
Charge = current (A) × time (s)

**Industrial Applications:**
• Extraction of aluminium (from Al₂O₃ in molten cryolite)
• Electroplating
• Purification of copper`
      }
    ]
  },
  {
    id: "organic",
    title: "Organic Chemistry",
    icon: "🧬",
    category: "Organic Chemistry",
    description: "The chemistry of carbon compounds — nomenclature, functional groups, reaction mechanisms, and isomerism.",
    keyConcepts: [
      {
        title: "Fundamentals & Nomenclature",
        content: `**Homologous Series:** family of compounds with same functional group, similar chemical properties, graduating physical properties.

**Key Functional Groups:**
| Group | Suffix | Prefix | Example |
|---|---|---|---|
| Alkane | -ane | — | Ethane, CH₃CH₃ |
| Alkene | -ene | — | Ethene, CH₂=CH₂ |
| Alcohol | -ol | hydroxy- | Ethanol, CH₃CH₂OH |
| Aldehyde | -al | — | Ethanal, CH₃CHO |
| Ketone | -one | — | Propanone, CH₃COCH₃ |
| Carboxylic acid | -oic acid | — | Ethanoic acid, CH₃COOH |
| Ester | -oate | — | Ethyl ethanoate, CH₃COOCH₂CH₃ |
| Amine | -amine | amino- | Methylamine, CH₃NH₂ |
| Amide | -amide | — | Ethanamide, CH₃CONH₂ |
| Nitrile | -nitrile | cyano- | Ethanenitrile, CH₃CN |
| Haloalkane | — | chloro-/bromo-/iodo- | Chloromethane, CH₃Cl |

**Naming Rules (IUPAC):**
1. Identify longest carbon chain (parent chain)
2. Number from end nearest to functional group
3. Name substituents with positions (use commas between numbers, hyphens between numbers and words)
4. List substituents alphabetically`
      },
      {
        title: "Hydrocarbons — Alkanes & Alkenes",
        content: `**Alkanes (CₙH₂ₙ₊₂):**
• Saturated — single bonds only — generally unreactive
• Free radical substitution with halogens (UV light):
  • Initiation: Cl₂ → 2Cl•
  • Propagation: Cl• + CH₄ → •CH₃ + HCl; •CH₃ + Cl₂ → CH₃Cl + Cl•
  • Termination: two radicals combine
• Combustion: complete (CO₂ + H₂O) and incomplete (CO/C + H₂O)
• Cracking: breaking long-chain alkanes into shorter alkanes + alkenes (catalyst, high T)

**Alkenes (CₙH₂ₙ):**
• Unsaturated — contain C=C double bond — more reactive
• Test for unsaturation: decolourise bromine water (Br₂)

**Electrophilic Addition Reactions:**
• With HBr: Markovnikov's rule — H adds to C with more H atoms
• With Br₂: anti-addition via bromonium ion intermediate
• With H₂O (hydration): requires H₃PO₄ catalyst, Markovnikov product
• With H₂: hydrogenation using Ni/Pt/Pd catalyst

**Polymerisation:**
• Addition polymerisation: alkenes → poly(alkene)
• n CH₂=CH₂ → [−CH₂−CH₂−]ₙ`
      },
      {
        title: "Alcohols, Carbonyls & Carboxylic Acids",
        content: `**Alcohols (R−OH):**
• Primary (1°): RCH₂OH → oxidised to aldehyde → carboxylic acid
• Secondary (2°): R₂CHOH → oxidised to ketone
• Tertiary (3°): R₃COH → NOT oxidised by acidified K₂Cr₂O₇
• Dehydration: alcohol → alkene (conc. H₂SO₄, heat)
• Esterification: alcohol + carboxylic acid ⇌ ester + water (acid catalyst)

**Aldehydes (R−CHO):**
• Oxidised to carboxylic acids (K₂Cr₂O₇/H⁺, Tollens' reagent, Fehling's solution)
• Reduced to primary alcohols (NaBH₄ or LiAlH₄)
• Test: Tollens' reagent (silver mirror), Fehling's solution (red precipitate)

**Ketones (R−CO−R):**
• NOT oxidised by K₂Cr₂O₇ (distinguishes from aldehydes)
• Reduced to secondary alcohols (NaBH₄ or LiAlH₄)
• Test: 2,4-DNPH (orange precipitate with both aldehydes and ketones)

**Carboxylic Acids (R−COOH):**
• Weak acids: partially dissociate in water
• React with metals, bases, carbonates (CO₂ produced)
• Form esters with alcohols (Fischer esterification)
• Can be reduced to primary alcohols (LiAlH₄ only)`
      },
      {
        title: "Isomerism",
        content: `**Structural Isomerism** (different structural formulae):
1. Chain isomerism: different carbon chain arrangement
2. Position isomerism: functional group at different position
3. Functional group isomerism: different functional groups (e.g., aldehyde vs ketone)

**Stereoisomerism** (same structural formula, different spatial arrangement):

**Cis-Trans (Geometric) Isomerism:**
• Requires C=C double bond (restricted rotation) + two different groups on each C
• Cis: similar groups on same side; Trans: opposite sides
• E/Z notation: E = higher priority groups opposite; Z = same side

**Optical Isomerism (Enantiomers):**
• Requires a chiral centre (carbon with 4 different groups attached)
• Non-superimposable mirror images
• Rotate plane-polarised light in opposite directions
• (+) dextrorotatory (clockwise), (−) laevorotatory (anticlockwise)
• Racemic mixture: equal amounts of both enantiomers (optically inactive)

**Importance in Biology:**
• Enantiomers can have drastically different biological effects
• Thalidomide tragedy — one enantiomer therapeutic, other teratogenic`
      },
      {
        title: "Reaction Mechanisms",
        content: `**Nucleophile:** electron pair donor (attracted to δ+ carbon)
Examples: OH⁻, CN⁻, NH₃, H₂O

**Electrophile:** electron pair acceptor (attracted to δ− regions)
Examples: H⁺, Br₂, NO₂⁺, CH₃⁺

**Key Mechanisms for SJChO:**

**1. Nucleophilic Substitution (SN1/SN2):**
• Haloalkanes → alcohols (with NaOH)
• SN2: one-step, favoured for primary haloalkanes
• SN1: two-step via carbocation, favoured for tertiary haloalkanes

**2. Electrophilic Addition (to alkenes):**
• Markovnikov's rule for asymmetric alkenes
• Intermediate: carbocation (more stable = tertiary > secondary > primary)

**3. Elimination:**
• Haloalkane → alkene (with NaOH in ethanol, heat)
• Zaitsev's rule: more substituted alkene is major product

**4. Condensation/Esterification:**
• Alcohol + carboxylic acid → ester + water (conc. H₂SO₄ catalyst)

**5. Oxidation/Reduction:**
• Oxidation: K₂Cr₂O₇/H⁺ (1° → aldehyde → acid; 2° → ketone)
• Reduction: NaBH₄ (carbonyl → alcohol); LiAlH₄ (stronger, reduces acids too)`
      }
    ]
  },
  {
    id: "inorganic",
    title: "Inorganic Chemistry",
    icon: "🧪",
    category: "Inorganic Chemistry",
    description: "Periodic trends, Group chemistry, qualitative analysis, and transition metals.",
    keyConcepts: [
      {
        title: "Periodic Trends",
        content: `**Across a Period (left to right):**
• Atomic radius: DECREASES (increasing nuclear charge, same shielding)
• Ionic radius: DECREASES for cations; anions larger than parent atoms
• Ionisation energy: generally INCREASES (exceptions at Groups 3 and 6)
• Electronegativity: INCREASES
• Metallic character: DECREASES

**Down a Group:**
• Atomic radius: INCREASES (additional electron shells)
• Ionisation energy: DECREASES (outer electrons further from nucleus)
• Electronegativity: DECREASES
• Metallic character: INCREASES

**Diagonal Relationships:**
• Li resembles Mg; Be resembles Al; B resembles Si
• Due to similar charge density (charge/size ratio)

**Effective Nuclear Charge (Zeff):**
Zeff = Z − σ (where σ = shielding constant)
• Determines trends in atomic radius, ionisation energy, electronegativity`
      },
      {
        title: "Group 2 (Alkaline Earth Metals)",
        content: `Elements: Be, Mg, Ca, Sr, Ba

**Trends down the group:**
• Reactivity INCREASES (lower IE, easier to lose electrons)
• Atomic/ionic radius INCREASES
• Melting point generally DECREASES
• Solubility of hydroxides INCREASES (Be(OH)₂ insoluble → Ba(OH)₂ soluble)
• Solubility of sulfates DECREASES (MgSO₄ soluble → BaSO₄ insoluble)
• Thermal stability of carbonates/nitrates INCREASES

**Reactions:**
• With water: M + 2H₂O → M(OH)₂ + H₂ (increasing vigour)
• With oxygen: form MO (basic oxides)
• With acids: MO + 2H⁺ → M²⁺ + H₂O

**Test for Group 2 ions:** BaCl₂ solution → white precipitate of BaSO₄ (insoluble)
**Flame tests:** Ca (brick red), Sr (crimson), Ba (apple green)`
      },
      {
        title: "Group 17 (Halogens)",
        content: `Elements: F, Cl, Br, I, At

**Trends down the group:**
• Reactivity DECREASES (atomic radius increases, electron gain less favourable)
• Boiling point INCREASES (stronger van der Waals forces)
• Electronegativity DECREASES
• Colour darkens: F₂ (pale yellow) → I₂ (dark grey solid)
• Oxidising power DECREASES

**Displacement Reactions:**
• More reactive halogen displaces less reactive halide from solution
• Cl₂ + 2KBr → 2KCl + Br₂ (Cl₂ displaces Br₂)
• Cl₂ + 2KI → 2KCl + I₂ (Cl₂ displaces I₂)

**Hydrogen Halides:**
• HCl, HBr, HI — all strong acids in water
• Thermal stability DECREASES down group (bond weakens)
• Acid strength INCREASES: HCl < HBr < HI

**Tests:**
• AgNO₃ + dilute HNO₃: AgCl (white), AgBr (cream), AgI (yellow)
• Solubility in NH₃(aq): AgCl dissolves in dilute NH₃; AgBr in conc. NH₃; AgI insoluble`
      },
      {
        title: "Transition Metals",
        content: `Defined as d-block elements that form at least one ion with an incomplete d subshell.

**Characteristic Properties:**
1. Form coloured compounds/ions
2. Variable oxidation states
3. Catalytic activity
4. Form complex ions

**Complex Ions:**
• Central metal ion + ligands (via dative covalent bonds)
• Coordination number = number of coordinate bonds to metal
• Common ligands: H₂O, NH₃, Cl⁻, CN⁻, OH⁻
• Examples: [Cu(H₂O)₆]²⁺ (blue), [Cu(NH₃)₄(H₂O)₂]²⁺ (deep blue), [Fe(CN)₆]³⁻

**Ligand Substitution Reactions:**
[Cu(H₂O)₆]²⁺ + 4NH₃ → [Cu(NH₃)₄(H₂O)₂]²⁺ + 4H₂O
[Co(H₂O)₆]²⁺ + 4Cl⁻ → [CoCl₄]²⁻ + 6H₂O

**Crystal Field Theory (A-Level):**
• d orbitals split into two energy levels in an octahedral field
• t₂g (lower): dₓᵧ, dᵤ₂, dₓ₂ (3 orbitals)
• eᵍ (higher): d₂², dₓ²₋ᵧ² (2 orbitals)
• Δ₀ (crystal field splitting energy) determines colour
• Colour = complementary colour of light absorbed

**Catalysis by Transition Metals:**
• Fe³⁺ in Haber process
• V₂O₅ in Contact process
• MnO₄⁻/Fe²⁺ redox titrations`
      },
      {
        title: "Qualitative Analysis",
        content: `**Testing for Cations (using NaOH and NH₃):**
| Cation | NaOH (aq) | Excess NaOH | NH₃ (aq) | Excess NH₃ |
|---|---|---|---|---|
| Cu²⁺ | Blue ppt | Insoluble | Blue ppt | Deep blue solution |
| Fe²⁺ | Green ppt | Insoluble | Green ppt | Insoluble |
| Fe³⁺ | Brown ppt | Insoluble | Brown ppt | Insoluble |
| Al³⁺ | White ppt | Dissolves | White ppt | Insoluble |
| Zn²⁺ | White ppt | Dissolves | White ppt | Dissolves |
| Ca²⁺ | White ppt | Insoluble | — | — |
| NH₄⁺ | No ppt; NH₃ gas on heating | | | |

**Testing for Anions:**
• CO₃²⁻: add dilute acid → effervescence (CO₂ turns limewater milky)
• Cl⁻/Br⁻/I⁻: add AgNO₃ + HNO₃ → characteristic ppt
• SO₄²⁻: add BaCl₂ + HCl → white ppt of BaSO₄
• NO₃⁻: add NaOH + Al foil, warm → NH₃ gas (turns damp red litmus blue)

**Testing for Gases:**
• H₂: 'pop' with lighted splint
• O₂: relights glowing splint
• CO₂: turns limewater milky
• NH₃: turns damp red litmus blue; white fumes with HCl
• Cl₂: bleaches damp litmus paper
• SO₂: turns acidified K₂Cr₂O₇ from orange to green`
      }
    ]
  },
  {
    id: "practical",
    title: "Practical Techniques",
    icon: "🔬",
    category: "Practical Chemistry",
    description: "Essential laboratory techniques for Round 2 — titration, qualitative analysis, separation, and chromatography.",
    keyConcepts: [
      {
        title: "Titration Techniques",
        content: `**Purpose:** Determine the concentration of an unknown solution by reacting it with a standard solution.

**Apparatus:** burette, pipette, conical flask, white tile, indicator

**Procedure:**
1. Rinse burette with the solution to be used (avoid dilution)
2. Rinse pipette with the solution it will deliver
3. Rinse conical flask with distilled water only
4. Fill burette, record initial reading
5. Pipette known volume of analyte into flask
6. Add indicator (few drops)
7. Titrate slowly, swirling constantly
8. Near endpoint: add drop by drop
9. Record final reading; repeat for concordant results (within 0.10 cm³)

**Accuracy Tips:**
• Read burette at eye level (bottom of meniscus)
• Use a white tile to see colour change clearly
• Repeat until 2 concordant results obtained
• Calculate mean of concordant titres only`
      },
      {
        title: "Chromatography & Separation",
        content: `**Thin-Layer Chromatography (TLC):**
• Stationary phase: silica gel (SiO₂) or alumina on a plate
• Mobile phase: solvent
• Separation based on polarity/adsorption
• Rf = distance travelled by spot / distance travelled by solvent front
• Visualisation: UV light, iodine vapour, ninhydrin (amino acids)

**Paper Chromatography:**
• Stationary phase: water on cellulose
• Mobile phase: organic solvent

**Column Chromatography:**
• For purification and separation of larger quantities
• Less polar compounds elute first (travel faster)

**Other Separation Techniques:**
• **Simple distillation:** separate liquids with very different bp (>25°C)
• **Fractional distillation:** separate miscible liquids with closer bp
• **Filtration:** separate insoluble solid from liquid
• **Evaporation/crystallisation:** obtain solid from solution
• **Liquid-liquid extraction:** separate based on solubility in different solvents`
      },
      {
        title: "Spectroscopy Basics (Round 2)",
        content: `**UV-Visible Spectroscopy:**
• Measures absorption of UV/visible light by molecules
• Compounds with conjugated π systems absorb in UV-vis region
• Beer-Lambert Law: A = εcl (Absorbance = molar absorptivity × concentration × path length)
• Used for concentration determination

**Infrared (IR) Spectroscopy:**
• Identifies functional groups by their bond vibrations
• Key absorption bands:
  • O–H (alcohol): 3200–3600 cm⁻¹ (broad)
  • O–H (carboxylic acid): 2500–3300 cm⁻¹ (very broad)
  • C=O: 1680–1750 cm⁻¹ (strong, sharp)
  • C–H: 2850–3100 cm⁻¹
  • N–H: 3300–3500 cm⁻¹
  • C=C: 1620–1680 cm⁻¹

**Raman Spectroscopy (A-Level extension):**
• Based on inelastic scattering of monochromatic light
• Complementary to IR spectroscopy
• Symmetric stretches are Raman-active

**NMR (beyond scope but may appear in Round 2):**
• ¹H NMR: chemical shift, integration, splitting pattern
• Used to determine molecular structure`
      }
    ]
  }
];
