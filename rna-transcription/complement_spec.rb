require 'spec_helper'
require 'pry'
require_relative 'complement'

describe Complement do
  
  context "when testing complement of dna" do
    it "should test rna complement of cytosine is guanine" do 
      expect(Complement.of_dna('C')).to eq('G')
    end
    
    it "test_rna_complement_of_guanine_is_cytosine" do
      expect(Complement.of_dna('G')).to eq('C')
    end
    
    it "test_rna_complement_of_thymine_is_adenine" do
      expect(Complement.of_dna('T')).to eq('A')
    end
    
    it "test_rna_complement_of_adenine_is_uracil" do
      expect(Complement.of_dna('A')).to eq('U')
    end
    
    it "test_rna_complement" do
      expect(Complement.of_dna('ACGTGGTCTTAA')).to eq('UGCACCAGAAUU')
    end
    
    it "test_rna_raises_argument_error" do
      expect{Complement.of_rna('T')}.to raise_error(ArgumentError)
    end
  end
  
  context "when testing complement of rna" do
    
    it "test_dna_complement_of_cytosine_is_guanine" do
      expect(Complement.of_rna('C')).to eq('G')
    end
    
    it "test_dna_complement_of_guanine_is_cytosine" do
      expect(Complement.of_rna('G')).to eq('C')
    end
    
    it "test_dna_complement_of_uracil_is_adenine" do
      expect(Complement.of_rna('U')).to eq('A')
    end
    
    it "test_dna_complement_of_adenine_is_thymine" do
       expect(Complement.of_rna('A')).to eq('T')
    end
    
    it "test_dna_complement" do
       expect(Complement.of_rna('UGAACCCGACAUG')).to eq('ACTTGGGCTGTAC')
    end
    
    it "test_dna_raises_argument_error" do
      expect{Complement.of_dna('U')}.to raise_error(ArgumentError)
    end
  end
  
end
  
