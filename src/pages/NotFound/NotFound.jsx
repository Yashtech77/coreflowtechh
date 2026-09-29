import Seo from "../../components/common/Seo";
import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404" />
      <Container className="flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-foreground">This rack is empty</h1>
        <p className="mt-3 max-w-md text-muted">The page you requested is not on the Coreflowtech site.</p>
        <Button to="/" className="mt-8">
          Return home
        </Button>
      </Container>
    </>
  );
}
