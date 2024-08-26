import { useRouter} from 'next/router';

function DetailPage () {
  const router = useRouter();

  const newsId = router.query.newsId; // newsId is the name of the file in the pages folder

  return (
    <h1>The Detail Page</h1>
  )
}

export default DetailPage;
