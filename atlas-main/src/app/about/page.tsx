
export default function AboutPage() {
  return (
    <div className="bg-background py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-headline text-5xl font-bold mb-8">Our Mission</h1>
        <p className="text-xl text-muted-foreground mb-12">
          We empower families and their offices with the technology required to master the complexity of modern global wealth.
        </p>
        
        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground text-lg">
          <p>
            Atlas Wealth Systems was founded by a team of former family office principals, wealth managers, and software engineers who recognized a critical gap in the market.
          </p>
          <p>
            While institutional finance moved toward real-time clarity, private wealth remained trapped in fragmented spreadsheets and manual reporting. We built Atlas to be the system of record that the world's most significant estates deserve.
          </p>
          <p>
            Today, we serve a global community of wealth owners who value precision, privacy, and control above all else.
          </p>
        </div>
      </div>
    </div>
  );
}
