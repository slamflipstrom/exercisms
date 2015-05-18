class Complement
  
  
  @dna_key =  
   {'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U'}
    
  def self.transcribe(strand, dna_key)
    if strand.chars.map {|x| dna_key[x]}.join == ""
      raise ArgumentError
    else
      strand.chars.map {|x| dna_key[x]}.join
    end
  end

  def self.of_dna(rna_strand)
    transcribe(rna_strand, @dna_key)
  end
  
  def self.of_rna(dna_strand)
     transcribe(dna_strand, @dna_key.invert) 
  end  
  
  
end
