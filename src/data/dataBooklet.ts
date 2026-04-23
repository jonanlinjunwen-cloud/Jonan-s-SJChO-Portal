export const dataBooklet = {
  sections: [
    {
      title: "Fundamental Constants",
      items: [
        { symbol: "Nₐ", name: "Avogadro constant", value: "6.022 × 10²³ mol⁻¹" },
        { symbol: "F", name: "Faraday constant", value: "96 485 C mol⁻¹" },
        { symbol: "R", name: "Molar gas constant", value: "8.314 J K⁻¹ mol⁻¹" },
        { symbol: "p°", name: "Standard pressure", value: "1.00 × 10⁵ Pa (1 atm)" },
        { symbol: "T°", name: "Standard temperature", value: "298 K (25 °C)" },
        { symbol: "Vm", name: "Molar volume at STP", value: "22.4 dm³ mol⁻¹" },
        { symbol: "Vm", name: "Molar volume at RTP", value: "24.0 dm³ mol⁻¹" },
        { symbol: "c", name: "Speed of light", value: "3.00 × 10⁸ m s⁻¹" },
        { symbol: "h", name: "Planck constant", value: "6.626 × 10⁻³⁴ J s" },
        { symbol: "me", name: "Electron mass", value: "9.109 × 10⁻³¹ kg" },
        { symbol: "mp", name: "Proton mass", value: "1.673 × 10⁻²⁷ kg" },
        { symbol: "e", name: "Elementary charge", value: "1.602 × 10⁻¹⁹ C" },
      ]
    },
    {
      title: "Stoichiometry & Gas Laws",
      formulas: [
        { name: "Moles from mass", formula: "n = m / M", note: "m = mass (g), M = molar mass (g mol⁻¹)" },
        { name: "Moles from concentration", formula: "n = C × V", note: "C = conc (mol dm⁻³), V = vol (dm³)" },
        { name: "Molar concentration", formula: "C = m / (M × V)", note: "m = mass (g), V = vol (dm³)" },
        { name: "Ideal Gas Equation", formula: "PV = nRT", note: "P (Pa), V (m³), n (mol), T (K)" },
        { name: "Combined Gas Law", formula: "P₁V₁/T₁ = P₂V₂/T₂", note: "For fixed amount of gas" },
        { name: "Dalton's Law", formula: "Ptotal = P₁ + P₂ + ...", note: "Sum of partial pressures" },
        { name: "Partial pressure", formula: "pᵢ = xᵢ × Ptotal", note: "xᵢ = mole fraction of gas i" },
        { name: "Density of gas", formula: "ρ = PM / RT", note: "M = molar mass" },
        { name: "Percentage yield", formula: "% yield = (actual / theoretical) × 100", note: "" },
        { name: "Percentage purity", formula: "% purity = (pure mass / total mass) × 100", note: "" },
      ]
    },
    {
      title: "Thermodynamics",
      formulas: [
        { name: "Enthalpy from bond energies", formula: "ΔH = Σ(Dbroken) − Σ(Dformed)", note: "Bond breaking = endothermic (+)" },
        { name: "Hess's Law (formation)", formula: "ΔH = Σ ΔH°f(products) − Σ ΔH°f(reactants)", note: "Elements in std state: ΔH°f = 0" },
        { name: "Hess's Law (combustion)", formula: "ΔH = Σ ΔH°c(reactants) − Σ ΔH°c(products)", note: "" },
        { name: "Entropy change", formula: "ΔS = Σ S°(products) − Σ S°(reactants)", note: "Units: J K⁻¹ mol⁻¹" },
        { name: "Gibbs Free Energy", formula: "ΔG = ΔH − TΔS", note: "ΔG < 0 → feasible" },
        { name: "At equilibrium", formula: "T = ΔH / ΔS", note: "When ΔG = 0" },
        { name: "ΔG and equilibrium", formula: "ΔG° = −RT ln K", note: "Relates ΔG° to K" },
        { name: "Heat capacity", formula: "q = mcΔT", note: "m = mass, c = specific heat capacity" },
        { name: "Lattice Energy (Born-Landé)", formula: "U ∝ (q₊ × q₋) / (r₊ + r₋)", note: "Charge and size dependence" },
      ]
    },
    {
      title: "Kinetics",
      formulas: [
        { name: "General rate law", formula: "Rate = k[A]^m[B]^n", note: "m, n = orders of reaction" },
        { name: "Zero order integrated", formula: "[A] = [A]₀ − kt", note: "Linear: [A] vs t" },
        { name: "First order integrated", formula: "ln[A] = ln[A]₀ − kt", note: "Linear: ln[A] vs t" },
        { name: "Second order integrated", formula: "1/[A] = 1/[A]₀ + kt", note: "Linear: 1/[A] vs t" },
        { name: "Half-life (1st order)", formula: "t½ = ln 2 / k = 0.693 / k", note: "Constant half-life" },
        { name: "Arrhenius equation", formula: "k = A e^(−Ea/RT)", note: "A = pre-exponential factor" },
        { name: "Arrhenius (log form)", formula: "ln k = ln A − Ea/(RT)", note: "Plot ln k vs 1/T → gradient = −Ea/R" },
      ]
    },
    {
      title: "Equilibria",
      formulas: [
        { name: "Kc expression", formula: "Kc = [C]ᶜ[D]ᵈ / [A]ᵃ[B]ᵇ", note: "For aA + bB ⇌ cC + dD" },
        { name: "Kp expression", formula: "Kp = (pC)ᶜ(pD)ᵈ / (pA)ᵃ(pB)ᵇ", note: "Using partial pressures" },
        { name: "Kp from Kc", formula: "Kp = Kc(RT)^Δn", note: "Δn = moles gas products − reactants" },
        { name: "Mole fraction", formula: "xᵢ = nᵢ / ntotal", note: "Σxᵢ = 1" },
        { name: "ΔG and K", formula: "ΔG° = −RT ln K", note: "Links thermodynamics to equilibrium" },
        { name: "van 't Hoff equation", formula: "ln(K₂/K₁) = (ΔH°/R)(1/T₁ − 1/T₂)", note: "K vs temperature" },
      ]
    },
    {
      title: "Acids, Bases & Buffers",
      formulas: [
        { name: "pH definition", formula: "pH = −log₁₀[H⁺]", note: "[H⁺] = 10^(−pH)" },
        { name: "pOH", formula: "pOH = −log₁₀[OH⁻]", note: "" },
        { name: "Ion product of water", formula: "Kw = [H⁺][OH⁻] = 10⁻¹⁴ (25°C)", note: "pH + pOH = 14 (25°C)" },
        { name: "Weak acid dissociation", formula: "Ka = [H⁺][A⁻] / [HA]", note: "pKa = −log Ka" },
        { name: "Weak acid pH (approx)", formula: "[H⁺] = √(Ka × [HA])", note: "When dissociation is small" },
        { name: "Henderson-Hasselbalch", formula: "pH = pKa + log([A⁻]/[HA])", note: "Buffer equation" },
        { name: "pKw", formula: "pKw = pH + pOH = 14", note: "At 25°C" },
        { name: "Kb for weak base", formula: "Kb = [BH⁺][OH⁻] / [B]", note: "Ka × Kb = Kw" },
      ]
    },
    {
      title: "Electrochemistry",
      formulas: [
        { name: "Cell EMF", formula: "E°cell = E°(cathode) − E°(anode)", note: "Or E°(reduction) − E°(oxidation)" },
        { name: "Nernst equation", formula: "E = E° − (RT/nF) ln Q", note: "At 25°C: E = E° − (0.0592/n) log Q" },
        { name: "ΔG and E", formula: "ΔG° = −nFE°", note: "n = moles of electrons transferred" },
        { name: "Faraday's 1st Law", formula: "m = (Q × M) / (n × F)", note: "M = molar mass, n = electrons per ion" },
        { name: "Charge", formula: "Q = I × t", note: "I = current (A), t = time (s)" },
        { name: "Moles of electrons", formula: "n(e⁻) = Q / F = It / 96500", note: "F = 96 500 C mol⁻¹" },
      ]
    },
    {
      title: "Organic Chemistry",
      formulas: [
        { name: "Degree of unsaturation", formula: "DoU = (2C + 2 − H + N − X) / 2", note: "C,H,N,X = atoms; O and S don't affect" },
        { name: "Esterification", formula: "RCOOH + R'OH ⇌ RCOOR' + H₂O", note: "Acid catalyst, reversible" },
        { name: "Combustion (alkane)", formula: "CₙHₘ + (n + m/4)O₂ → nCO₂ + (m/2)H₂O", note: "" },
        { name: "Beer-Lambert Law", formula: "A = εcl", note: "ε = molar absorptivity, c = conc, l = path length" },
      ]
    },
  ]
};
