package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/fibs7000/go-graphql-benchmark/graph/generated"
	"github.com/fibs7000/go-graphql-benchmark/graph/model"
	"github.com/fibs7000/go-graphql-benchmark/src/data"
)

func (r *authorResolver) Md5(ctx context.Context, obj *model.Author) (string, error) {

	return "test123test123test123test123", nil
}

func (r *queryResolver) Authors(ctx context.Context) ([]*model.Author, error) {
	return data.GenData(), nil
}

// Author returns generated.AuthorResolver implementation.
func (r *Resolver) Author() generated.AuthorResolver { return &authorResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type authorResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
